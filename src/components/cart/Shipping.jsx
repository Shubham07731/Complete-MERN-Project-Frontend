import React from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label htmlFor="">H.No</label>
            <input type="text" placeholder="Enter House No" />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input type="text" placeholder="Enter city" />
          </div>
          <div>
            <label htmlFor="">Country</label>
            <select>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
            <select>
              <label htmlFor="">Country</label>

              <option>State</option>
              {State &&
                State.getStatesOfCountry("AU").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Pincode</label>
            <input type="text" placeholder="Enter pincode" />
          </div>
          <div>
            <label htmlFor="">Phone No</label>
            <input type="number" placeholder="Enter phone No" />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
