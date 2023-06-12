import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../components/Title/SectionTitle';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const UpdateClass = () => {
    const newdata = useLoaderData();
    // console.log(newdata._id);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        // console.log(data);

        // console.log(newdata);
        const { name, category, classname, email, price, image, seats, status, classurl, photoUrl } = data;
        const newClass = {
            Instructorname: newdata?.Instructorname,
            price: parseFloat(price),
            email: newdata?.email,
            category,
            classname,
            seats: parseFloat(seats),
            classurl: image,
            status: newdata?.status,
            photoUrl: newdata?.photoURL,

        }
        console.log(newClass);


        fetch(`https://assignment-12-server-olive.vercel.app/classes/updateclass/${newdata._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Updated a class`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })




    };

    return (
        <div className="w-full px-10">
            <Helmet>
                <title>MUSIC FAIRY || Update Class</title>
            </Helmet>
            <SectionTitle subHeading="" heading="Add an Class" ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input defaultValue={newdata.classname} type="text" placeholder="Class Name"
                        {...register("classname")}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input defaultValue={newdata.Instructorname} type="text" disabled placeholder={newdata.Instructorname}
                        {...register('Instructorname')}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor email*</span>
                    </label>
                    <input defaultValue={newdata.email} type="text" disabled placeholder={newdata.email}
                        {...register("email")}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Type*</span>
                        </label>
                        <select defaultValue={newdata.category} {...register("category")} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Guitar</option>
                            <option>violin</option>
                            <option>Piano</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" defaultValue={newdata.price}  {...register("price")} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Availabe seats*</span>
                        </label>
                        <input type="number" defaultValue={newdata.seats} {...register("seats")} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input defaultValue={newdata.classurl} type="text" {...register("image")} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4 mb-9" type="submit" value="Update Class" />
            </form>
        </div>
    );
};

export default UpdateClass;