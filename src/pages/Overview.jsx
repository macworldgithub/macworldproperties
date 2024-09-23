import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const ImpressionsGraph = ({ impression, click }) => {
    const [impressionsData, setImpressionsData] = useState([]);
    const [clicksData, setClicksData] = useState([]);
    const [options] = useState({
        chart: {
            id: 'impressions-clicks-chart',
        },
        xaxis: {
            categories: [], // Dates will be set here
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            const currentDate = new Date();
            const dates = [];
            const impressions = [10, 20, 30];
            const clicks = [1, 2, 5];

            // Generate dates for the past 7 days
            for (let i = 6; i >= 0; i--) {
                const date = new Date(currentDate);
                date.setDate(currentDate.getDate() - i);
                dates.push(formatDate(date)); // Format date to 'yyyy-mm-dd'
                const fetchedImpressions = { impression }.impression; // Replace with actual API call for impressions
                const fetchedClicks = { click }.click; // Replace with actual API call for clicks

                impressions.push(fetchedImpressions);
                clicks.push(fetchedClicks);
            }

            setImpressionsData(impressions);
            setClicksData(clicks);
            options.xaxis.categories = dates;
        };

        fetchData();
    }, [{ impression }, { click }]); // Empty dependency array ensures the effect runs once after the initial render.

    // Format a date to 'yyyy-mm-dd' format
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div>
            <h2 className='font-bold text-2xl'>Impressions and Clicks Over Time</h2>

            <Chart
                options={options}
                series={[
                    { name: 'Impressions', data: impressionsData },
                    { name: 'Clicks', data: clicksData },
                ]}
                type="line"
                height={350}
            />
        </div>

    );
};

export default ImpressionsGraph;