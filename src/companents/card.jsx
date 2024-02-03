import { useMemo, useState } from "react";
import Modal from "./modal";
import { createPortal } from "react-dom";

const Card = ({ data }) => {
    const [open, setOpen] = useState(false);

    const salePrice = useMemo(() => {
        return data.price - data.price * (data.sale/100);
    }, [data.price]);
    
    return (
        <div>
            <div className='w-72 border-2 border-solid border-slate-400 p-3 rounded'>
                <div className='w-72 h-72'>
                    <img
                        src={data.img}
                        alt={data.title}
                        className='w-full h-full object-contain'
                    />
                </div>
                <h1 className='max-w-72'>{data.title}</h1>
                <del>{data.price} so'm</del>
                <div className='flex justify-between'>
                    <p>{salePrice} so'm</p>
                    <button onClick={() => setOpen(true)}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='none'>
                            <path
                                fill='#000'
                                d='M8 10V8H6v4.5a.5.5 0 0 1-1 0V7h3c0-2.404 1.952-4 4-4 2.057 0 4 1.706 4 4h3v12.5a1.5 1.5 0 0 1-1.5 1.5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 0 .5-.5V8h-2v2h-1V8H9v2H8Zm4-6c-1.552 0-3 1.204-3 3h6c0-1.706-1.457-3-3-3Z'></path>
                            <path
                                fill='#000'
                                d='M7.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H8v2.5a.5.5 0 0 1-1 0V18H4.5a.5.5 0 0 1 0-1H7v-2.5a.5.5 0 0 1 .5-.5Z'></path>
                        </svg>
                    </button>
                </div>
            </div>
            {open && createPortal(<Modal setOpen={setOpen} data={data} />, document.body)}
        </div>
    );
};
export default Card;
