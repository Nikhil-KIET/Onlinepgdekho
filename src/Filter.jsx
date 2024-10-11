import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { search } from "./ReduxStore/HotelSlice";

export default function Filter() {

    const dispatch=useDispatch();

    const formik = useFormik({
        initialValues: {
            city: 'all',
            price: 'all', // Consider using a number type for price
            type: 'all',
            date: '',
        },
        validationSchema: Yup.object({
            city: Yup.string().required('City is required'),
           
            date: Yup.string().required('Please select a move-in date'),
        }),
        onSubmit: (values) => {
           // alert(JSON.stringify(values, null, 2));

            dispatch(search(values));



            console.log(JSON.stringify(values))
        },
    });

    return (
        <div className="w-[100%] bg-white h-[45%]  ">
            <div className="flex gap-6 border shadow-sm rounded-md px-5 w-[100%] py-2  ">
                <form onSubmit={formik.handleSubmit} className="space-x-4 flex justify-evenly items-center w-[100%]">
                    <div>
                        <div>
                            <label htmlFor="city">Location</label>
                        </div>

                        <input type="text" name="city"
                            id="city"
                            placeholder="Select City"
                            onChange={formik.handleChange}
                            value={formik.values.city}/>
                        

                        {formik.touched.city && formik.errors.city ? (
                            <p className="text-red-600">{formik.errors.city}</p>
                        ) : null}
                    </div>

                    <div className=' h-[90%] bg-gray-100 w-[.2%]'></div>

                    <div>
                        <div>
                            <label htmlFor="date">When</label>
                        </div>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            placeholder="Select Move In Dates"
                            onChange={formik.handleChange}
                            value={formik.values.date}
                        />
                        {/* Display error message if applicable */}
                        {formik.touched.date && formik.errors.date ? (
                            <p className="text-red-600">{formik.errors.date}</p>
                        ) : null}
                    </div>

                    <div className=' h-[90%] bg-gray-100 w-[.2%]'></div>

                    <div>
                        <div>
                            <label htmlFor="price">Price</label>
                        </div>
                        <select
                            name="price"
                            id="price"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                        >
                            <option value="all">all</option>
                            <option value="500-1000">500-1000</option>
                            <option value="1000-5000">1000-5000</option>
                            <option value="5000-100000">5000-100000</option>
                            <option value="100000-200000">100000-200000</option>
                            <option value="0-999999999">0-999999999</option>
                            {/* Add more options as needed */}
                        </select>
                        {/* Display error message if applicable */}
                        {formik.touched.price && formik.errors.price ? (
                            <p className="text-red-600">{formik.errors.price}</p>
                        ) : null}
                    </div>

                    <div className=' h-[90%] bg-gray-100 w-[.2%]'></div>

                    <div>
                        <div>
                            <label htmlFor="type">Property Type</label>
                        </div>
                        <select
                            name="type"
                            id="type"
                            onChange={formik.handleChange}
                            value={formik.values.type}
                        >
                            <option value="all">all</option>
                            <option value="pg">PG</option>
                            <option value="flat">Flat</option>
                            {/* Add more options as needed */}
                        </select>
                        {/* Display error message if applicable */}
                        {formik.touched.field && formik.errors.type ? (
                            <p className="text-red-600">{formik.errors.type}</p>
                        ) : null}
                    </div>

                    <div className=' h-[90%] bg-gray-100 w-[.2%]'></div>

                    <button type="submit" className=" px-8 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-700  transition-all duration-500 " >Submit</button>
                </form>
            </div>
        </div>
    );
}