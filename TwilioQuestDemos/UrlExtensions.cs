using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TwilioQuestDemos
{
    public static class UrlExtensions
    {
        public static Uri GetBaseUrl(this UrlHelper url, bool includePort)
        {
            Uri baseUri;
            if (includePort)
                baseUri = url.RequestContext.HttpContext.Request.Url;
            else
                baseUri = new Uri(url.RequestContext.HttpContext.Request.Url.GetComponents(UriComponents.AbsoluteUri & ~UriComponents.Port, UriFormat.UriEscaped));

            var uri = new Uri(
                baseUri,
                url.RequestContext.HttpContext.Request.RawUrl
            );
            var builder = new UriBuilder(uri)
            {
                Path = url.RequestContext.HttpContext.Request.ApplicationPath,
                Query = null,
                Fragment = null
            };
            return builder.Uri;
        }

        public static string ContentAbsolute(this UrlHelper url, string contentPath)
        {
            return new Uri(GetBaseUrl(url, true), url.Content(contentPath)).AbsoluteUri;
        }

        public static string ContentAbsolute(this UrlHelper url, bool includePort, string contentPath)
        {
            return new Uri(GetBaseUrl(url, includePort), url.Content(contentPath)).AbsoluteUri;
        }

        public static string ActionAbsolute(this UrlHelper url, string actionName)
        {
            return url.ActionAbsolute(actionName, null, null);
        }

        public static string ActionAbsolute(this UrlHelper url, string actionName, string controllerName)
        {
            return url.ActionAbsolute(actionName, controllerName, null);
        }

        public static string ActionAbsolute(this UrlHelper url, string actionName, object routeValues)
        {
            return url.ActionAbsolute(actionName, null, routeValues);
        }

        public static string ActionAbsolute(this UrlHelper url, string actionName, string controllerName, object routeValues)
        {
            return url.Action(actionName, controllerName, routeValues, "http");
        }
    }

}