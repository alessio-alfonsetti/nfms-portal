UNREDD.maxExtent = new OpenLayers.Bounds(-20037508, -20037508, 20037508, 20037508);
//UNREDD.restrictedExtent = new OpenLayers.Bounds(-20037508, -20037508, 20037508, 20037508);
UNREDD.maxResolution = 4891.969809375;
UNREDD.mapCenter = new OpenLayers.LonLat(19435100, -1599512);
UNREDD.defaultZoomLevel = 0;

UNREDD.wmsServers = [
    //"http://demo1.geo-solutions.it",
    //"http://incuweb84-33-51-16.serverclienti.com"
];

UNREDD.layerInfo = {
    
	drc_provinces: function(feature) {
        var that = {};
        that.title = function() {
            return messages.province + ": " + feature.attributes.PROVINCE;
        };
        that.statsLink = function() {
            return UNREDD.wmsServers[0] + '/diss_geostore/rest/misc/category/name/ChartData/resource/name/drc_forest_area_charts_' +  feature.attributes.OBJECTID + '_' + languageCode + '/data?name=' + feature.attributes.PROVINCE;
        };     
        return that;
    },
    
    palau_boundaries: function(feature) {
        var that = {};
        
    	that.customPopup = function () {
            var emergents = feature.attributes.Emergents;

            palau_boundaries: function(feature) {
                var that = {};

                that.customPopup = function () {

                	var name = feature.attributes.NAME_EN;
                
                	var template = '<table>';
                	template	+= '<tbody><tr>';
                	template	+= '<td width="10px"></td>';
                	template	+=         '<td><img src="/images/flags/flag_palau.png"></td>';
                	template	+= 	'<td width="20px"></td>';
                	template	+=         '<td><h1>name</h1></td>';
                	template	+=         '<td width="10px"></td>';
                	template	+= '</tr>';
                	template	+= '<tr><td colspan="5"><p>Launched in 2015</p></td></tr>';
                	template	+= '<tr><td colspan="5"><a href="/portal?country=palau" target="_blank"><b>Click HERE to visit the portal</b></a></td></tr>';
                	template	+= '</tbody></table>';

/*                	
		            var template = '<table style="font-size:10pt">';
		            template	+= '<tr><td><img src="/diss_geoserver/data/www/flags/flag_palau.png"></td></tr>';
		            template    += '<tr><td style="text-align:right;padding:4pt 8pt 4pt 0">:</td><td style="padding:4pt 0 4pt 0">{{stm_dnst}}</td></tr>';
		            template    += '<tr><td style="vertical-align: top;text-align:right;padding:4pt 8pt 4pt 0">Above Ground Biomass (t/ha)<br> Allometric model: Chave 2005 moist model(t/ha)</td><td style="vertical-align: top;padding:4pt 0 4pt 0">{{AGB_2005}}</td></tr>';
		            template    += '<tr><td style="text-align:right;padding:4pt 8pt 4pt 0">Type:</td><td style="padding:4pt 0 4pt 0">{{Type}}</td></tr>';
		            template    += '<tr><td style="text-align:right;padding:4pt 8pt 4pt 0">Condition:</td><td style="padding:4pt 0 4pt 0">{{Condition}}</td></tr>';
		            template    += '<tr><td style="text-align:right;padding:4pt 8pt 4pt 0">Emergents:</td><td style="padding:4pt 0 4pt 0">' + emergents + '</td></tr>';
		            template    += '<tr><td style="text-align:right;padding:4pt 8pt 4pt 0">Contact/source:</td><td style="padding:4pt 0 4pt 0">Jean-François Bastomtin - <a href="http://www.google.com/recaptcha/mailhide/d?k=01FBQPE_PmptylfUCVwdcrCA==&amp;c=VNu4iBqqhAy3B73S0qYVzb1cE8gueAg3ZcTrMTcK5zU=" onclick="window.open(\'http://www.google.com/recaptcha/mailhide/d?k\07501FBQPE_PmptylfUCVwdcrCA\75\75\46c\75VNu4iBqqhAy3B73S0qYVzb1cE8gueAg3ZcTrMTcK5zU\075\', \'\', \'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300\'); return false;" title="Reveal this e-mail address"> email</a></td></tr>';
		            template    += '</table>'
*/

		            //var json = {title: "title article" }
		            var info = $.mustache(template, feature.attributes);
		            $("#custom_popup").html(info);

		            $('.thumbnail').mouseenter(function(e) {
		                //var popup = $('<img src="/images/' + e.target.innerText.toLowerCase() + '.jpg" class="popup_img">');
		            	var popup = $('<img src="/images/flags/flag_palau.png" class="popup_img">');
		
		                popup.css({ left: e.pageX, top: e.pageY + 12 });
		                $('body').append(popup);
		            })

		            $('.thumbnail').mouseleave(function() {
		                $('.popup_img').remove();
		            });
                }
    	
                return that;
            }
    	}
