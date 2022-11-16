import React from 'react';

const AppoServiceCard = ({ serviceCard }) => {
    const { name } = serviceCard
    return (
        <div>
            <div className="card bg-[#e3e3e3]">
                <div className="card-body justify-center">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <label htmlFor="my-modal-3" className="btn bg-slate-600">Booking now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoServiceCard;