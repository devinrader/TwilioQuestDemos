using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace TwilioQuestDemos
{
    public class MobileServiceRequestHelper<T> where T : class
    {
        private string tableEndpoint;
        private string applicationKey;
        private HttpClient client;
        public MobileServiceRequestHelper(string tableName)
        {
            tableEndpoint = "https://twoconferences.azure-mobile.net/tables/" + tableName; //ConfigurationManager.AppSettings["TableEndpoint"] + tableName;
            applicationKey = "aNVmMdxUUyFSVTsRslVIlRNvxAUZzY46"; //ConfigurationManager.AppSettings["X-ZUMO-APPLICATION"];

            client = new HttpClient();
            client.DefaultRequestHeaders.Add("X-ZUMO-APPLICATION", applicationKey);
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            var result = await client.GetStringAsync(tableEndpoint);
            var data = JsonConvert.DeserializeObject<IEnumerable<T>>(result);
            return data;
        }

        public async Task<T> GetAsync(int id)
        {
            var result = await client.GetStringAsync(tableEndpoint + "?$filter=Id eq " + id);
            var data = JsonConvert.DeserializeObject<IEnumerable<T>>(result);
            return data.FirstOrDefault();
        }

        public async Task<IEnumerable<T>> GetAllAsync(IDictionary<string, object> filterParameters)
        {
            string filters = BuildFilters(filterParameters);
            var result = await client.GetStringAsync(tableEndpoint + "?filters=" + filters);
            var data = JsonConvert.DeserializeObject<IEnumerable<T>>(result);
            return data;
        }

        private string BuildFilters(IDictionary<string, object> parameters) 
        {
            StringBuilder builder = new StringBuilder();
            foreach(var key in parameters.Keys) {
                builder.AppendFormat("{0} eq {1} AND ", key, parameters[key].ToString());
            }
            builder.Length = builder.Length - 4;
            return builder.ToString();
        }

        public async Task<bool> PostAsync(T requestData)
        {
            var obj = JsonConvert.SerializeObject(requestData, new JsonSerializerSettings() { NullValueHandling = NullValueHandling.Ignore });
            var request = new HttpRequestMessage(HttpMethod.Post, tableEndpoint);
            request.Content = new StringContent(obj, Encoding.UTF8, "application/json");
            var data = await client.SendAsync(request);
            if (data.IsSuccessStatusCode)
                return true;
            else
                throw new HttpResponseException(data.StatusCode);
        }

        public async Task<bool> PutAsync(T requestData, int id)
        {

            var request = new HttpRequestMessage(new HttpMethod("PATCH"), tableEndpoint + id);
            var obj = JsonConvert.SerializeObject(requestData);
            request.Content = new StringContent(obj, Encoding.UTF8, "application/json");
            var data = await client.SendAsync(request);
            if (data.IsSuccessStatusCode)
                return true;
            else
                throw new HttpResponseException(data.StatusCode);

        }
        public async void DeleteAsync(int id)
        {
            var request = new HttpRequestMessage(HttpMethod.Delete, tableEndpoint + id.ToString());
            var data = await client.SendAsync(request);
            if (!data.IsSuccessStatusCode)
                throw new HttpResponseException(data.StatusCode);
        }
    }
}