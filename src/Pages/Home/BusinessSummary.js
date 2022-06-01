import { ArchiveIcon, ChatIcon, CurrencyDollarIcon, GlobeIcon, UserGroupIcon } from '@heroicons/react/solid';
import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold text-teal-500 my-8'>MILLIONS BUSINESS TRUST US</h1>
            <p className='text-center text-xl mt-5'>TRY TO UNDERSTAND USERS EXPECTATION</p>
            <div class="grid grid-flow-row auto-rows-max">
                <div class="stats stats-vertical lg:stats-horizontal shadow my-5 justify-center">
                    <div class="stat h-40">
                        <div class="stat-figure text-secondary">
                            <UserGroupIcon className='w-12 mx-auto font-bold  text-teal-500'></UserGroupIcon>
                        </div>
                        <div class="stat-title">Customers</div>
                        <div class="stat-value">100+</div>
                        <div class="stat-desc">Jan 1st - Mar 1st</div>
                    </div>

                    <div class="stat h-40">
                        <div class="stat-figure text-secondary">
                            <CurrencyDollarIcon className='w-12 mx-auto font-bold  text-teal-500'></CurrencyDollarIcon>
                        </div>
                        <div class="stat-title">Annual Revenue</div>
                        <div class="stat-value">120M+</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div class="stat h-40">
                        <div class="stat-figure text-secondary">
                            <ChatIcon className='w-12 mx-auto font-bold  text-teal-500'></ChatIcon>
                        </div>
                        <div class="stat-title">Reviews</div>
                        <div class="stat-value">33K+</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    <div class="stat h-40">
                        <div class="stat-figure text-secondary">
                            <ArchiveIcon className='w-12 mx-auto font-bold  text-teal-500'></ArchiveIcon>
                        </div>
                        <div class="stat-title">Products</div>
                        <div class="stat-value">50+</div>
                        <div class="stat-desc">Woven Looms</div>
                    </div>
                    <div class="stat ">
                        <div class="stat-figure text-secondary">
                            <GlobeIcon className='w-12 mx-auto font-bold  text-teal-500'></GlobeIcon>
                        </div>
                        <div class="stat-title">Countries</div>
                        <div class="stat-value">22+</div>
                        <div class="stat-desc">31 Delivery remaining</div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default BusinessSummary;