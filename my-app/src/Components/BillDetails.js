import React, { useState, setState } from "react";
import "./style.css";
import { database } from "../firebase";
import { ref, push, child, update } from "firebase/database";

function BillDetails(){

     const [userName, setuserName] = useState(null);
     const [phoneNo, setphoneNo] = useState(null);
     const [email, setEmail] = useState(null);
     const [itemName, setitemName] = useState("");
     const [itemArr, setItemArr] = useState([]);
     const [itemPrice, setitemPrice] = useState([]);

    const handleInputChange = e => {
        const { id, value } = e.target;
        if (id === "userName") {
          setuserName(value);
        }
        if (id === "phoneNo") {
          setphoneNo(value);
        }
        if (id === "email") {
          setEmail(value);
        }
      };

    const handleSubmit = () => {
        let obj = {
          userName: userName,
          phoneNo: phoneNo,
          email: email
        };
        const newPostKey = push(child(ref(database), "posts")).key;
        const updates = {};
        updates["/" + newPostKey] = obj;
        return update(ref(database), updates);
      };

      const handleSubmit1 = () => {
        console.log(itemName);
        let obj = {
            ItemName : itemName,
            Price    : itemPrice
        }
        setItemArr([...itemArr, obj]);
        setitemName("");
        // setTimeout(() => {console.log(itemArr);}, 2000);
      }
      console.log(itemArr);


    return(
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="userName">
            User Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={userName}
            onChange={e => handleInputChange(e)}
            id="userName"
            placeholder="User Name"
          />
        </div>
        <div className="phoneNo">
          <label className="form__label" for="phoneNo">
            Phone No.{" "}
          </label>
          <input
            type="text"
            name=""
            id="phoneNo"
            value={phoneNo}
            className="form__input"
            onChange={e => handleInputChange(e)}
            placeholder="phoneNo"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={e => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="itemName">
          <label className="form__label" for="itemName">
            Item Name{" "}
          </label>
          <input
            type="text"
            id="itemName"
            className="form__input"
            value={itemName}
            onChange={e => setitemName(e.target.value)}
            placeholder="Item Name"
          />
          <input
            type="text"
            id="itemPrice"
            className="form__input"
            value={itemPrice}
            onChange={e => setitemPrice(e.target.value)}
            placeholder="Item Price"
          />
          <button onClick={() => handleSubmit1()} type="submit" class="btn">
          Add
        </button>
        </div>
      </div>
      <div className="footer">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Submit
        </button>
      </div>
    </div>
    );
}


export default BillDetails