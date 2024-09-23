import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import Layout from '../Layout';
import axios from 'axios';


const ImpressionsGraph = ({ impression, click }) => {
    const [impressionsData, setImpressionsData] = useState([]);
    const [labels, setLabel] = useState([])
    const [graphData, setGraphData] = useState([])
    const [options, setOptions] = useState({
        datasets: graphData,
        chart: {
            id: 'impressions-clicks-chart',
        },
        xaxis: {
            categories: labels, // Dates will be set here
        },
        // yaxis: graphDatax    
    });

    const fetchUserData = async () => {
        const name = localStorage.getItem("userData");
        const data = await JSON.parse(name);
        axios.get(`${process.env.REACT_APP_SERVERURL}/property/get-user-clicks/${data?._id}`).then(res => {
            const labelData = res?.data?.data?.map(item => {
                return item.date.split('T')[0]

            });
            let obj = [];
            labelData?.map(item => {
                let temp3 = 0;
                res?.data?.data?.map((ele) => {
                    const temp2 = ele.date.split('T')[0]
                    if (temp2 == item) {
                        temp3 += 1;
                    }

                });
                // let obj2 = {
                //     label: item,
                //     data: temp3
                // }
                obj.push(temp3);
            });
            let labelFilteredData = [];
            labelData?.map((acc) => {
                const reper = labelFilteredData?.includes(acc);
                if (reper == false) {
                    labelFilteredData.push(acc);
                }
            })
            let dataFilteredData = [];
            obj?.map((acc) => {
                const reper = dataFilteredData?.includes(acc);
                if (reper == false) {
                    dataFilteredData.push(acc);
                }
            })

            setOptions({
                chart: {
                    id: 'impressions-clicks-chart',
                },
                xaxis: {
                    categories: labelFilteredData, // Dates will be set here
                },
                yaxis: {

                },
                // fill: {
                //     colors: ["#F44336"]
                //   },
                dataLabels: {
                    enabled: false
                },

                title: {
                    text: "Analytics",
                    align: "center",
                    margin: 20,
                    offsetY: 20,
                    style: {
                        fontSize: "25px"
                    }
                }
            })
            setLabel(labelFilteredData);
            console.log('poi', dataFilteredData)
            setGraphData(dataFilteredData);
        }).catch(err => {
            console.log('21321c3heck', err)
        })

        axios.get(`${process.env.REACT_APP_SERVERURL}/property/get-impressions-on-view/${data?._id}`).then(res => {
            let obj = [];
            const labelData = res?.data?.data?.map(item => {
                return item.date.split('T')[0]
            });
            labelData?.map(item => {
                let temp3 = 0;
                res?.data?.data?.map((ele) => {
                    const temp2 = ele.date.split('T')[0]
                    if (temp2 == item) {
                        console.log(true)
                        temp3 += 1;
                    }
                });
                obj.push(temp3);
            });
            
                let dataFilteredData = [];
                obj?.map((acc) => {
                    const reper = dataFilteredData?.includes(acc);
                    if (reper == false) {
                        dataFilteredData.push(acc);
                    }
                })
                console.log('asdf', dataFilteredData)
                setImpressionsData(dataFilteredData)
        })
    }

    useEffect(() => {

        fetchUserData();

    }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const currentDate = new Date();
    //         const dates = [];
    //         const impressions = [10, 20, 30];
    //         const clicks = [1, 2, 5];

    //         // Generate dates for the past 7 days
    //         for (let i = 6; i >= 0; i--) {
    //             const date = new Date(currentDate);
    //             date.setDate(currentDate.getDate() - i);
    //             dates.push(formatDate(date)); // Format date to 'yyyy-mm-dd'
    //             const fetchedImpressions = { impression }.impression; // Replace with actual API call for impressions
    //             const fetchedClicks = { click }.click; // Replace with actual API call for clicks

    //             impressions.push(fetchedImpressions);
    //             clicks.push(fetchedClicks);
    //         }

    //         setImpressionsData(impressions);
    //         setClicksData(clicks);
    //         options.xaxis.categories = dates;
    //     };

    //     fetchData();
    // }, [{ impression }, { click }]); // Empty dependency array ensures the effect runs once after the initial render.

    // Format a date to 'yyyy-mm-dd' format
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <Layout>
            <div className='p-5'>
                <h2 className='font-bold text-2xl mt-[100px]'>Impressions and Clicks Over Time</h2>
                <Chart
                    options={options}
                    series={[
                        { name: 'Impressions', data: impressionsData },
                        { name: 'Clicks', data: graphData }
                    ]}
                    type="bar"
                    height={350}
                />
            </div>
        </Layout>

    );
};

export default ImpressionsGraph;
