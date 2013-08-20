using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace TwilioQuestDemos
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                    "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                    "~/Scripts/jquery-ui*"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                    "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                    "~/Scripts/knockout-2.3.0.js"));
            
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                    "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/infragistics").Include(
                    "~/Scripts/Infragistics/js/infragistics.core.js",
                    "~/Scripts/Infragistics/js/infragistics.lob.js",
                    "~/Scripts/Infragistics/js/infragistics.dv.js"));

            bundles.Add(new ScriptBundle("~/bundles/xdate").Include(
                    "~/Scripts/xdate*"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                    "~/Content/themes/base/jquery.ui.core.css",
                    "~/Content/themes/base/jquery.ui.resizable.css",
                    "~/Content/themes/base/jquery.ui.selectable.css",
                    "~/Content/themes/base/jquery.ui.accordion.css",
                    "~/Content/themes/base/jquery.ui.autocomplete.css",
                    "~/Content/themes/base/jquery.ui.button.css",
                    "~/Content/themes/base/jquery.ui.dialog.css",
                    "~/Content/themes/base/jquery.ui.slider.css",
                    "~/Content/themes/base/jquery.ui.tabs.css",
                    "~/Content/themes/base/jquery.ui.datepicker.css",
                    "~/Content/themes/base/jquery.ui.progressbar.css",
                    "~/Content/themes/base/jquery.ui.theme.css"));

            bundles.Add(new StyleBundle("~/Content/bootstrap").Include(
                    "~/Content/bootstrap/bootstrap.css",
                    "~/Content/bootstrap/bootstrap-theme.css"
            ));

            bundles.Add(new StyleBundle("~/Content/infragistics").Include(
                    "~/Content/Infragistics/css/themes/infragistics/infragistics.theme.css",
                    "~/Content/Infragistics/css/themes/structure/infragistics.css"));

        }
    }
}