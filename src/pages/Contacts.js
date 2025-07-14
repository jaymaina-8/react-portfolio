import { useState } from "react";
import { User, Mail, Send, MessageSquare, CheckCircle, XCircle } from "lucide-react";

function Contact() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // State for submission status and messages
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'submitting'
    const [submissionMessage, setSubmissionMessage] = useState('');

    // Consider adding specific error types


    // Handle input changes and update form state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        setSubmissionStatus('submitting'); // Set status to submitting
        setSubmissionMessage('Sending your message...'); // Set loading message

        // Simulate an API call or backend submission
        // In a real application, you would send this data to your server
        try {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Simulate a successful submission
            setSubmissionStatus('success');
            setSubmissionMessage(`Thanks ${form.name}, your message has been sent!`);

            // Clear the form after successful submission
            setForm({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            // Simulate an error during submission
            setSubmissionStatus('error');
            setSubmissionMessage('Failed to send message. Please try again later.');
            console.error('Submission error:', error);
        } finally {
            // Clear the status and message after a short delay
            setTimeout(() => {
                setSubmissionStatus(null);
                setSubmissionMessage('');
            }, 5000); // Message disappears after 5 seconds
        }
    };

    return (
        <div className="contact-form-container">
            <h2>Contact Me</h2>
            <p>
                Have a question or want to work together? Feel free to reach out!
            </p>

            <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="input-group">
                    <User size={20} className="icon" />
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email Input */}
                <div className="input-group">
                    <Mail size={20} className="icon" />
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Subject Input */}
                <div className="input-group">
                    <MessageSquare size={20} className="icon" />
                    <label htmlFor="subject" className="sr-only">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Message Textarea */}
                {/* Textarea does not need the icon padding, so it's not in an input-group */}
                <div>
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows="5"
                    ></textarea>
                </div>

                {/* Submission Status Message */}
                {submissionStatus && (
                    <div
                        className={`submission-message ${
                            submissionStatus === 'success'
                                ? 'submission-success'
                                : submissionStatus === 'error'
                                    ? 'submission-error'
                                    : 'submission-submitting'
                        }`}
                    >
                        {submissionStatus === 'success' && <CheckCircle size={18} />}
                        {submissionStatus === 'error' && <XCircle size={18} />}
                        {submissionStatus === 'submitting' && (
                            <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        {submissionMessage}
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={submissionStatus === 'submitting'}
                >
                    {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                </button>
            </form>
        </div>
    );
}

export default Contact;