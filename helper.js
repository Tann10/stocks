function drawSheetName(sheetName, query, responseHandler) {
                var queryString = encodeURIComponent(query);
                var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1XQo2m_AmTBnpPRiUaZOUBOSvo-QR16GH1ibDO5pZtv0/gviz/tq?sheet='+sheetName
                +'&headers=1&tq='+queryString);
                query.send(responseHandler);
            }

function latestSpendingtResponseHandler(response){

          var data = response.getDataTable();
                var dashboard = new google.visualization.Dashboard(document.getElementById('military_spending_div'));

                var chartOptions = {
                chartType: 'GeoChart',
                containerId: 'mil_geo_chart',
                view: {columns: [1, 2]},
                options: {
                    width: '100%',
                    height: '100%',
                    colorAxis: {colors: ['#ee9410', '#278014']}, //orange to blue
                    title: 'Military Spending for Year 2019',
                    // vAxis: { format: 'short', title: 'Spending in Billions ($)'},
                    // hAxis: {title: 'Country', textStyle : { fontSize: 10} },
                    // title: 'G20 Countries Military Spending across 6 years',
                    legend: {position: 'top', maxLines: 3, textStyle : {fontSize: 10}},
                    // bar: {groupWidth:'80%'}
                    // hAxis: {textStyle: {fontSize: 12}},
                    // vAxis: {title: 'Billions ($)'},
                    // backgroundColor: '#F7F7F7',
                    // fontName: "Helvetica Neue",
                    // width: '100%',
                    // height: 500
                }
            };

                var chart = new google.visualization.ChartWrapper(chartOptions);

        var filter = new google.visualization.ControlWrapper({
            controlType: 'CategoryFilter',
            containerId: 'filter_div_geo',

            options: {
                filterColumnLabel: 'Metric',
                ui: {
                    label: 'Metric',
                    caption: 'Select metric...',
                    allowNone: false,
                    allowMultiple: false,
                    labelStacking: 'horizontal',
                    cssClass: 'dropbtn'
                },
                fontName: "Helvetica Neue"
            },
            state: {selectedValues: ['As Per Capita']},
        });
        dashboard.bind(filter, chart);
        dashboard.draw(data);

        };

function spendingResponseHandler(response){
                var data = response.getDataTable();
                var dashboard = new google.visualization.Dashboard(document.getElementById('military_spending_div'));

                var chartOptions = {
                chartType: 'ColumnChart',
                containerId: 'over_time_column_chart',
                view: {columns: [1, 2, 3, 4, 5, 6, 7]},
                options: {
                    width: '100%',
                    height: '100%',
                    vAxis: { format: 'short', title: 'Expenditure'},
                    hAxis: {title: 'Country', textStyle : { fontSize: 10} },
                    title: 'G20 Countries Expenditure across 6 years',
                    legend: {position: 'top', maxLines: 3, textStyle : {fontSize: 10}},
                    // bar: {groupWidth:'80%'},
                    // hAxis: {textStyle: {fontSize: 12}},
                    // vAxis: {title: 'Billions ($)'},
                    // backgroundColor: '#F7F7F7',
                }
            };

        var chart = new google.visualization.ChartWrapper(chartOptions);
        var filter = new google.visualization.ControlWrapper({
            controlType: 'CategoryFilter',
            containerId: 'filter_div',

            options: {
                filterColumnLabel: 'Metric',
                ui: {
                    label: 'Metric:',
                    caption: 'Select metric...',
                    allowNone: false,
                    allowMultiple: false,
                    labelStacking: 'horizontal',
                    cssClass: 'dropbtn'
                },
                fontName: "Helvetica Neue"
            },
            state: {selectedValues: ['As Per Capita']},
        });
        dashboard.bind(filter, chart);
        // chart.draw(data);
        dashboard.draw(data);

        };

function spendingPerCapitaResponseHandler(response){
    var data = response.getDataTable();
     var options = {
         width: '100%',
         height: '100%',
        title: 'G20 Countries GDP per Capita verses Expenditure per Capita',
        hAxis: {title: 'Gross Domestic Product per capita'},
        vAxis: {title: 'Expenditure per capita', format: 'short'},
          bubble: {textStyle: {color: "transparent"}},
          sizeAxis: {minValue: 0,  maxSize: 10},
          colorAxis: {colors: ['yellow', 'red']},
         backgroundColor: '#F7F7F7',


        // bubble: {textStyle: {fontSize: 11}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('bubble_div'));
      chart.draw(data, options);
}

function  spendingComparisonResponseHandler(response){
                var data = response.getDataTable();
                var dashboard = new google.visualization.Dashboard(document.getElementById('compare_spending_div'));
                data.sort([3])
                var chartOptions = {
                chartType: 'BarChart',
                containerId: 'compare_spending_div',
                view: {columns: [0, 2,3,4]},
                options: {
                    hAxis: { format: 'short', title: 'Expenditure'},
                    vAxis: {title: 'Country', textStyle : { fontSize: 10} },
                    title: 'G20 Countries Expenditure across 6 years',
                    legend: {position: 'right', maxLines: 3, textStyle : {fontSize: 13}},
                    isStacked: true,

                    bar: {groupWidth:'80%'},
                    // hAxis: {textStyle: {fontSize: 12}},
                    // vAxis: {title: 'Billions ($)'},
                    // backgroundColor: '#F7F7F7',
                    // fontName: "Helvetica Neue",
                    width: '100%',
                    gap: '50%',
                    height: 500
                }
            };
        var chart = new google.visualization.ChartWrapper(chartOptions);

        // for (var i = 0; i < filtersOptions.length; i++) {
        //     var filterOptions = filtersOptions[i];
        //     filterOptions.containerId = elementId + '_filter_' + i;
        //     var filter = new google.visualization.ControlWrapper(filterOptions);
        //     dashboard.bind(filter, chart);
        // }
        var filter1 = new google.visualization.ControlWrapper({
            controlType: 'CategoryFilter',
            containerId: 'filter_div',

            options: {
                filterColumnLabel: 'Year',
                ui: {
                    label: 'Year',
                    caption: 'Select category...',
                    allowNone: false,
                    allowMultiple: false,
                    labelStacking: 'horizontal',
                    // cssClass: 'category_filter'
                    cssClass: 'dropbtn',
                },
                fontName: "Helvetica Neue"
            },
            state: {selectedValues: [2019]},
        });

         var filter2 = new google.visualization.ControlWrapper({
            controlType: 'CategoryFilter',
            containerId: 'filter_div_2',

            options: {
                filterColumnLabel: 'Metric',
                ui: {
                    label: 'Metric',
                    caption: 'Select category...',
                    allowNone: false,
                    allowMultiple: false,
                    labelStacking: 'horizontal',
                    cssClass: 'dropbtn'
                },
                fontName: "Helvetica Neue"
            },
            state: {selectedValues: ['As Per Capita']},
        });

        dashboard.bind(filter1, chart);
        dashboard.bind(filter2, chart);

        // chart.draw(data);
        dashboard.draw(data);
}

function overallResponseHandler(response) {
        var data = response.getDataTable();
        console.log(data)
        var dashboard = new google.visualization.Dashboard(document.getElementById('military_spending_div'));

        var chartOptions = {
            width: '100%',
                    height: '100%',
        chartType: 'BubbleChart',
        containerId: 'bubble_chart',
        view: {columns: [0, 3, 1, 4]},
            options: {
                    vAxis: { format: 'short', title: 'Expenditure'},
                    hAxis: {title: 'Gross Domestic Product', textStyle : { fontSize: 10}, format: 'short', },
                    bubble: {textStyle: {color: "transparent"}},
                    sizeAxis: {minValue: 0,  maxSize: 10},
                     colorAxis: {colors: ['yellow', 'red']},
                    title: 'G20 Countries GDP verses Expenditure',
                    legend: {position: 'top', maxLines: 3, textStyle : {fontSize: 10}},
                    // bar: {groupWidth:'80%'},
                    // hAxis: {textStyle: {fontSize: 12}},
                    // vAxis: {title: 'Billions ($)'},
                    backgroundColor: '#F7F7F7',
                }
            };


        var chart = new google.visualization.ChartWrapper(chartOptions);
        var filter = new google.visualization.ControlWrapper({
            controlType: 'CategoryFilter',
            containerId: 'bubble_filter',

            options: {
                filterColumnLabel: 'Metric',
                ui: {
                    label: 'Metric',
                    caption: 'Select metric...',
                    allowNone: false,
                    allowMultiple: false,
                    labelStacking: 'horizontal',
                    cssClass: 'dropbtn2'
                },
            },
            state: {selectedValues: ['As Per Capita']},
        });
        dashboard.bind(filter, chart);
        // chart.draw(data);
        dashboard.draw(data);

}

function trendGDPResponseHandler(response) {
    var data = response.getDataTable();
    console.log(data)
    var dashboard = new google.visualization.Dashboard(document.getElementById('trend_div'));


    var chartOptions = {
        chartType: 'AreaChart',
        containerId: 'trend_div',
        view: {columns: [1, 2, 3, 4 ]},
        options: {
        title: 'G20 Countries Military, Health, and Education Expenditure',
        hAxis: {title: 'Year', format: '0'},
        vAxis: {title: 'Expenditure', format: 'short'},
        legend: {position: 'right', maxLines: 3, textStyle : {fontSize: 13}},
        backgroundColor: '#F7F7F7',


        // bubble: {textStyle: {fontSize: 11}}
      }};

        var chart = new google.visualization.ChartWrapper(chartOptions);
        var filter = new google.visualization.ControlWrapper({
            controlType: 'CategoryFilter',
            containerId: 'trend_filter_div',

            options: {
                filterColumnLabel: 'Country Name',
                ui: {
                    label: 'Country Name',
                    caption: 'Select metric...',
                    allowNone: false,
                    allowMultiple: false,
                    labelStacking: 'horizontal',
                    cssClass: 'dropbtn2'
                },
            },
            state: {selectedValues: ['United States']},
        });
        dashboard.bind(filter, chart);
        // chart.draw(data);
        dashboard.draw(data);
}


function GDPResponseHandler(response) {
    var data = response.getDataTable();
    console.log(data)
    var options = {
        // colorAxis: {colors: ['#224be8']},
         defaultColor: '#089ff1',

        // fill: "blue",
        title: 'G20 Countries GDP per Capita verses Expenditure per Capita',
        // hAxis: {title: 'Gross Domestic Product per capita'},
        // vAxis: {title: 'Expenditure per capita', format: 'short'},
        //   bubble: {textStyle: {color: "transparent"}},
        //   sizeAxis: {minValue: 0,  maxSize: 10},
        //   colorAxis: {colors: ['yellow', 'red']}


        // bubble: {textStyle: {fontSize: 11}}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('geo_div'));
      chart.draw(data, options);
}