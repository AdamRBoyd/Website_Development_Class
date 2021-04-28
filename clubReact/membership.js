import React from 'react';

function Membership() {
    return <React.Fragment>
        <header>
        <h1>Sign Up</h1>
        </header>
        <main>
            <section className="gridContainer bordered">
                <form action="membershipSignup" method="post">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" minLength="1" maxLength="50" required />
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" minLength="4" maxLength="32" required />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" minLength="8" maxLength="32" required />
                    <label htmlFor="how">How did you hear about us?: </label>
                    <select name="how" id="how">
                        <option value="google">Google</option>
                        <option value="friend">Friend</option>
                        <option value="site">Other Website</option>
                    </select>
                    <label htmlFor="comments">Comments: </label>
                    <input type="text" name="comments" id="comments" minLength="0" maxLength="50" />
                    <button type="submit">Signup</button>
                </form>
            </section>
        </main>
        <footer>
            &copy; 2021 Adam Boyd
        </footer>
    </React.Fragment>;
}

export default Membership;