import React, { useState } from 'react';
import WelcomeSection from '../components/WelcomeSection';

const PostAProperty = () => {
  const [formData, setFormData] = useState({
    email: '',
    ownerName: '',
    mobileNo: '',
    propertyType: 'commercial',
    propertyCategory: 'apartment',
    bedrooms: 'studio',
    size: '',
    propertyFor: 'rent',
    propertyLocation: 'dubai',
    communityName: '',
    buildingName: '',
    unitNo: '',
    authorizationLetter: null,
    titleDeed: null,
    passportIdCopy: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  
    const requiredFields = ['email', 'ownerName', 'mobileNo', 'propertyType'];
    const missingFields = requiredFields.filter((field) => !formData[field]);
  
    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return;
    }
  
    const form = new FormData();
    // Append form data
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    // Object.entries(files).forEach(([key, value]) => {
    //   if (value) form.append(key, value);
    // });
    console.log('Submitted Data:', formData);
    // try {
    //     const response = await fetch("https://api.example.com/properties", {
    //       method: "POST",
    //       body: form,
    //     });
    //     if (response.ok) {
    //       alert("Property submitted successfully!");
    //     } else {
    //       alert("Error submitting property");
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //     alert("An unexpected error occurred");
    //   }
  
    // Add API call logic or further processing here
    alert('Property details submitted successfully!');
  };

  return (
    <div className="py-24 min-h-screen w-screen flex justify-center items-center bg-gray-50">
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-8">
        <WelcomeSection/>

        {/* Form Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-primary font-bold text-2xl mb-6 text-center">
            Submit Your Property Details
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email <span className='text-red-600 ml-1'>*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Property Owner Name <span className='text-red-600 ml-1'>*</span></label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter owner's name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Mobile No <span className='text-red-600 ml-1'>*</span></label>
              <input
                type="tel"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter mobile number"
              />
            </div>

            {/* Property Details */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Property Type <span className='text-red-600 ml-1'>*</span></label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="commercial">Commercial</option>
                <option value="residential">Residential</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Property Category</label>
              <select
                name="propertyCategory"
                value={formData.propertyCategory}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="penthouse">Penthouse</option>
                <option value="hotel">Hotel Apartment</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">No. of Bedrooms</label>
              <select
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="studio">Studio</option>
                <option value="1">1 Bed</option>
                <option value="2">2 Bed</option>
                <option value="3">3 Bed</option>
                <option value="4">4 Bed</option>
                <option value="5">5 Bed</option>
                <option value="6">6 Bed</option>
                <option value="7">7 Bed</option>
                <option value="8">8 Bed</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Size (SQFT)</label>
              <input
                type="number"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter size in SQFT"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Property For</label>
              <select
                name="propertyFor"
                value={formData.propertyFor}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="rent">For Rent</option>
                <option value="management">For Management</option>
                <option value="sale"> For Sale</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Property Location</label>
              <select
                name="propertyLocation"
                value={formData.propertyLocation}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="dubai">Dubai</option>
                <option value="sharjah">Sharjah</option>
                <option value="abuDhabi">Abu Dhabi</option>
                <option value="rasAlKhaima">Ras Al Khaima</option>
                <option value="ajman">Ajman</option>
                <option value="ummAlQueen">Umm Al Queen</option>
                <option value="fujairah">Fujairah</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Community Name</label>
              <input
                type="text"
                name="communityName"
                value={formData.communityName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter community name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Building Name</label>
              <input
                type="text"
                name="buildingName"
                value={formData.buildingName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter building name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Unit No</label>
              <input
                type="text"
                name="unitNo"
                value={formData.unitNo}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter unit number"
              />
            </div>

            {/* Document Upload */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Required Documents
              </h3>
              <div className="mb-4">
                <p className="text-gray-600">
                  <strong>Signed Authorization Letter:</strong> Download the authorization document from the link below, fill in the details, and upload the document here.
                </p>
                <a href="/Listing Form - Template.docx"  download={true} className="text-primary underline mb-2 inline-block">
                  Get the Editable Document
                </a>
                <input
                  type="file"
                  name="authorizationLetter"
                  onChange={handleFileChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Title Deed
                </label>
                <input
                  type="file"
                  name="titleDeed"
                  onChange={handleFileChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Passport / Emirates ID Copy
                </label>
                <input
                  type="file"
                  name="passportIdCopy"
                  onChange={handleFileChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition duration-300"
              >
                Submit Property
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAProperty;
