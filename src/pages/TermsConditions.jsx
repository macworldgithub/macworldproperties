import React, { useEffect, useState } from 'react';
import { Footer } from '../components/common';

function Terms() {
    const [policy, setPolicy] = useState('');
    const [error, setError] = useState(false);
    const defaultPolicy = "<p>We're currently unable to retrieve the terms and conditions. Please check back later.</p>";

    useEffect(() => {
        const fetchPolicy = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVERURL}/terms-conditions`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.text();
                setPolicy(data);
            } catch (error) {
                console.error('Error fetching terms and conditions:', error);
                setError(true); // Set error state on fetch failure
            }
        };

        fetchPolicy();
    }, []);

    return (
        <>
            <div className='mt-20 p-5'>
              
                <div dangerouslySetInnerHTML={{ __html: error ? defaultPolicy : policy }} />
            </div>
            <div className="px-[2%] md:px-[6%] bg-footer border border-footer">
                <div className="mt-20">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Terms;
