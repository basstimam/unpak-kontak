import React from 'react'

const Header = () => {
    return (
        <div className="container">
            <div className='flex-col space-y-1 flex justify-center items-center '>
                <p className='text-xl font-semibold font-poppins'> Daftar Kontak Universitas Pakuan </p>
                <br />
                <br />
                <p className='text-sm'> Berisi kontak staff dan dosen aktif universitas pakuan</p>
                <p className='text-sm'> Data dibawah berdasarkan data tahun 2020</p>
                <p className='italic text-sm'>Ada kekeliruan kontak?</p>
                <br />

                <a href={`https://api.whatsapp.com/send?phone=6285320693418&text=`}>

                    <button className="btn btn-info btn-sm ">
                        Chat


                    </button>
                </a>




            </div>

        </div>
    )
}

export default Header