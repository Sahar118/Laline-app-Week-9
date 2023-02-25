// import React, { useState } from "react";

// const EditButton = () => {
//     const [data, setData] = useState({ id: "", title: "", price: "", image: "", Category: "" })

//     const [id, setId] = useState('');
//     const [title, setTitle] = useState("");
//     const [price, setPrice] = useState("");
//     const [category, setCategory] = useState("");
//     const [img, setImg] = useState("");


//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <p><span> Id:</span></p>
//                 <input
//                     type="text"
//                     name="id"
//                     value={id}

//                     onChange={handleChange} />
//                 <p><span> Title:</span></p>
//                 <input
//                     type="text"
//                     name="title"
//                     value={title}
//                     onChange={handleChange} />

//                 <p><span> price:</span></p>
//                 <input
//                     type="text"
//                     name="price"
//                     value={price}
//                     onChange={handleChange} />

//                 <p><span> Category:</span></p>

//                 <input
//                     type="text"
//                     name="Category"
//                     value={Category}
//                     onChange={handleChange} />


//                 <input type="file" accept="image/*" value={image} onChange={handleChange} />

//                 <button type="submit">Submit</button>


//             </form>
//         </div>
//     )
// }

// export default EditButton;