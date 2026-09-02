async function uploadAndSavePayment() {
    const fileInput = document.getElementById('paymentImage');
    const file = fileInput.files[0];

    if (!file) {
        alert("দয়া করে প্রথমে পেমেন্ট স্ক্রিনশটের একটি ছবি সিলেক্ট করুন!");
        return;
    }

    // ১. Cloudinary-তে পাঠানোর জন্য ফর্ম ডেটা তৈরি করা
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'payment screenshots'); // আপনার তৈরি করা প্রিসেটের নাম

    try {
        // ২. ক্লাউডিনারিতে ছবি আপলোড করা
        const cloudName = 'uepqaprw'; // আপনার আসল Cloud Name
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (!data.secure_url) {
            throw new Error("ছবি আপলোড হতে ব্যর্থ হয়েছে।");
        }

        const imageUrl = data.secure_url; 
        console.log("ছবির লিঙ্ক:", imageUrl);

        // ৩. ফায়ারবেস ডেটাবেসে লিঙ্কটি সেভ করা
        await addDoc(collection(db, "payments"), {
            screenshotUrl: imageUrl,
            status: "pending",
            createdAt: new Date()
        });

        alert("পেমেন্ট এবং স্ক্রিনশট সফলভাবে সাবমিট হয়েছে!");

    } catch (error) {
        console.error("ত্রুটি:", error);
        alert("কিছু একটা সমস্যা হয়েছে, আবার চেষ্টা করুন।");
    }
}
