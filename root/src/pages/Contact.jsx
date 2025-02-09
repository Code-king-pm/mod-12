export default function Contact() {
  return (
    <div>
      <h1>
        Contact Page <span> 🍌</span>
      </h1>

      <form>
        <div className="form-group">
          <label htmlFor="emailAddress">Email address</label>
          <input type="email" className="form-control" id="emailAddress" placeholder="name@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1">Example select</label>
          <select className="form-control" id="exampleSelect1">
            <option>give me help</option>
            <option>General Inquiry</option>
            <option>Support Request</option>
            <option>Feedback or Suggestion</option>
            <option>Partnership or Collaboration</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect2">The important matter: 1 (most important) to 5 (least important), urgent</label>
          <select multiple className="form-control" id="exampleSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea1">What is it that you would like to communicate</label>
          <textarea className="form-control" id="exampleTextarea1" rows="3"></textarea>
        </div>
      </form>
    </div>
  );
}
