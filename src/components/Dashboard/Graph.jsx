import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';



const ApexChartComponent = ({ dataSet }) => {
    const [impressionsData, setImpressionsData] = useState([10, 20, 30]);
    const [clicksData, setClicksData] = useState([1, 2]);
    const [options] = useState({
        series: [
            {
                name: 'Impressions',
                data: impressionsData,
            },
            {
                name: 'Clicks',
                data: clicksData,
            }
        ],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100],
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#8e8da4',
                },
                offsetX: 0,
                formatter: function (val) {
                    return (val / 1000000).toFixed(2);
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        xaxis: {
            type: 'datetime',
            tickAmount: 8,
            min: new Date('01/01/2014').getTime(),
            max: new Date('01/20/2014').getTime(),
            labels: {
                rotate: -15,
                rotateAlways: true,
                formatter: function (val, timestamp) {
                    return new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                    }).format(new Date(timestamp));
                },
            },
        },
        title: {
            text: 'Irregular Data in Time Series',
            align: 'left',
            offsetX: 14,
        },
        tooltip: {
            shared: true,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetX: -10,
        },
    });

    return (
        <div id="chart">
            <ReactApexChart options={options} series={options.series} type="area" height={350} />
        </div>
    );
};

export default ApexChartComponent;
