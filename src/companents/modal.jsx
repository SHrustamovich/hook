import { useMemo, useState } from "react";

const Modal = ({ setOpen, data }) => {
    const [id, setId] = useState(0);

    console.log(id);
    const handleFunc = (e) => {
        e.stopPropagation();
    };

    const salePriceType = useMemo(() => {
        return (
            data.type[id].price -
            data.type[id].price * (data.type[id].sale / 100)
        );
    }, [id]);
    return (
        <div
            className='fixed top-0 left-0 w-full h-screen bg-[#0009]'
            onClick={() => setOpen(false)}>
            <div
                className='w-1/2 rounded-md h-[320px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3'
                onClick={handleFunc}>
                <div className='flex'>
                    <div className='w-[260px] h-[240px] pr-3'>
                        <img
                            src={data.type[id].img}
                            alt={data.type[id].title}
                            className='w-full h-full object-contain'
                        />
                    </div>
                    <div>
                        <div className='flex items-center mb-2'>
                            <h1>{data.title}</h1>
                            <button
                                className='w-[36px] h-[24px] rounded-full bg-[#ccc] '
                                onClick={() => setOpen(false)}>
                                x
                            </button>
                        </div>
                        <hr />
                        <p className='py-2'>Color: {data.type[1].color}</p>
                        <div className='flex items-center gap-2'>
                            {data.type.map((item) => (
                                <button
                                    className='w-[60px] h-[70px] border-2 border-solid border-[#ccc] rounded-lg'
                                    key={item.id}
                                    onClick={() => setId(item.id)}>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className='w-full h-full object-contain'
                                    />
                                </button>
                            ))}
                        </div>
                        <div className='flex items-center gap-4 py-1'>
                            <del>{data.type[id].price} sum</del>
                            <p>{salePriceType} sum</p>
                        </div>
                        <p className='text-[#166199]'>
                            Sotuvda {data.type[id].count} to bor
                        </p>
                        <div className='py-2'>
                            <button
                                onClick={() => alert("Bajarildi")}
                                className='rounded bg-[#166199] p-3 w-full text-white'>
                                Sotuvga qo'shish
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
