import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../navbar/Nav";
import Footer from "../../navbar/Footer";

const Form = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const info = queryParams.get("info"); // Extract the info from the query parameters

    return (
        <div>
            <Navbar />
            {/* Add padding to the top to prevent overlap */}
            <div className="py-20 sm:pt-24 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
                
                <form className="space-y-6">
                    {/* Dog Breed Field */}
                    <div>
                    <h3 className="text-2xl font-bold text-center mb-2 mt-10 text-blue-700">
                    {info}
                    </h3>
                        <label
                            htmlFor="dogBreed"
                            className="block text-sm font-medium text-gray-700">
                            Dog Breed
                        </label>
                        <input
                            type="text"
                            id="dogBreed"
                            name="dogBreed"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter dog's breed"
                            required
                        />
                    </div>
                    {/* Age Field */}
                    <div>
                        <label
                            htmlFor="age"
                            className="block text-sm font-medium text-gray-700">
                            Dog Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            min="1"
                            max='30'
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter dog's age"
                            required
                        />
                    </div>
                    {/* Comment Field */}
                    <div>
                        <label
                            htmlFor="comments"
                            className="block text-sm font-medium text-gray-700">
                            Comments
                        </label>
                        <textarea
                            id="comments"
                            name="comments"
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Add any additional comments"
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Form;
