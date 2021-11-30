import React from "react";

function Location({ formData, setFormData }: any) {
  return (
    <div>
      <section>
        <h1 className="text-black text-xl font-bold mt-4">
          Where are you located?
        </h1>
        <p className="w-96 text-black mt-3">
          Your location is used to calculate sales tax, if applicable.
        </p>
        <div className="mt-6 flex items-center">
          <h3 className="text-black font-medium mr-6">Country:</h3>
          <input
            className="text-input rounded w-72"
            name="country"
            type="text"
            id="country"
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
          />
        </div>
        <div className="mt-6 flex items-center">
          <h3 className="text-black font-medium mr-4">Postcode:</h3>
          <input
            value={formData.postcode}
            onChange={(e) =>
              setFormData({ ...formData, postcode: e.target.value })
            }
            className="rounded w-72"
            name="postcode"
            type="number"
          />
        </div>
      </section>
    </div>
  );
}

export default Location;