import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <h2 className='text-primary'>Difference between authorization and authentication</h2>
            <div className='d-flex text-center'>
                <div>
                    <h2 className='text-info'>Authorization</h2>
                    <p>Authorization নির্ধারণ করে কোন ব্যবহারকারী কোন রিসোর্স অ্যাক্সেস করতে পারে।</p>
                    <p>Authorization সেই সেটিংসের মাধ্যমে কাজ করে যা সংস্থার দ্বারা বাস্তবায়িত এবং রক্ষণাবেক্ষণ করা হয়।</p>
                    <p>Authorization সর্বদা Authentication পরে সঞ্চালিত হয়।</p>
                    <p>Authorization ব্যবহারকারীর কাছে দৃশ্যমান বা পরিবর্তনযোগ্য নয়।</p>
                </div>
                <div>
                    <h2 className='text-info'>Authentication</h2>
                    <p>Authentication ব্যবহারকারী কে তা যাচাই করে।</p>
                    <p>পাসওয়ার্ড, ওয়ান-টাইম পিন, বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর দ্বারা প্রদত্ত বা প্রদত্ত অন্যান্য তথ্যের মাধ্যমে Authentication কাজ করে।</p>
                    <p>Authentication একটি ভাল পরিচয় এবং অ্যাক্সেস ব্যবস্থাপনা প্রক্রিয়ার প্রথম ধাপ।</p>
                    <p>Authentication ব্যবহারকারীর দ্বারা দৃশ্যমান এবং আংশিকভাবে পরিবর্তনযোগ্য।</p>
                </div>
            </div>
            <h2 className='text-primary'>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
                <br />
                FirebaseUI provides a customizable, open source, drop-in auth solution that handles the UI flows for signing in users. The FirebaseUI Auth component implements best practices for authentication on mobile devices and websites, which can maximize sign-in and sign-up conversion for your app.
            </p>

            <h2 className='text-primary'>What other services does firebase provide other than authentication?</h2>
            <p>Cloud Firestore</p>
            <p>Cloud Functions</p>
            <p>Authentication</p>
            <p>Hosting</p>
            <p>Cloud Storage</p>
            <p>Google Analytics</p>
            <p>Predictions</p>
            <p>Cloud Messaging</p>
        </div>
    );
};

export default Blogs;