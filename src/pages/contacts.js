import {useState} from "react";

function Contact(){
    const [form, setForm] =useState({name: "", massage: ""});

    const handlesubmit = (e) =>{
        e.preventDefault();
        alert(`Thanks ${form.name}, we received your message!`);
        setForm({ name: "", message: ""});
    };
    return (
        <form onSubmit={handlesubmit}>
            <h2>Contact Me</h2>
            <input placeholder="Your Me"
                   value={form.name}
                   onChange={(e) =>setForm({ ...form, name: e.target.value })}
                   required
            />
            <textarea placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      required
            ></textarea>
            <button type="submit">Send</button>
        </form>
    );
}
export default Contact