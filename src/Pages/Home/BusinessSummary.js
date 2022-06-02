import { ArchiveIcon, ChatIcon, CurrencyDollarIcon, GlobeIcon, UserGroupIcon } from '@heroicons/react/solid';
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='my-14'>
            <h1 className='text-center text-5xl font-bold text-teal-500 my-8'>MILLIONS BUSINESS TRUST US</h1>
            <p className='text-center text-xl mt-5'>TRY TO UNDERSTAND USERS EXPECTATION</p>
            <div className="grid grid-flow-row auto-rows-max">
                <div className="stats stats-vertical lg:stats-horizontal shadow my-5 justify-center">
                    <div className="stat h-40">
                        <div className="stat-figure text-secondary">
                            <UserGroupIcon className='w-12 mx-auto font-bold  text-teal-500'></UserGroupIcon>
                        </div>
                        <div className="stat-title">Customers</div>
                        <div className="stat-value">100+</div>
                        <div className="stat-desc">Jan 1st - Mar 1st</div>
                    </div>

                    <div className="stat h-40">
                        <div className="stat-figure text-secondary">
                            <CurrencyDollarIcon className='w-12 mx-auto font-bold  text-teal-500'></CurrencyDollarIcon>
                        </div>
                        <div className="stat-title">Annual Revenue</div>
                        <div className="stat-value">120M+</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat h-40">
                        <div className="stat-figure text-secondary">
                            <ChatIcon className='w-12 mx-auto font-bold  text-teal-500'></ChatIcon>
                        </div>
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value">33K+</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat h-40">
                        <div className="stat-figure text-secondary">
                            <ArchiveIcon className='w-12 mx-auto font-bold  text-teal-500'></ArchiveIcon>
                        </div>
                        <div className="stat-title">Products</div>
                        <div className="stat-value">50+</div>
                        <div className="stat-desc">Woven Looms</div>
                    </div>
                    <div className="stat ">
                        <div className="stat-figure text-secondary">
                            <GlobeIcon className='w-12 mx-auto font-bold  text-teal-500'></GlobeIcon>
                        </div>
                        <div className="stat-title">Countries</div>
                        <div className="stat-value">22+</div>
                        <div className="stat-desc">31 Delivery remaining</div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default BusinessSummary;