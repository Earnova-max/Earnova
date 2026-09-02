document.addEventListener("DOMContentLoaded", function() {
    let bannerHTML = `
    <div id="appDownloadBanner" style="display: none; align-items: center; justify-content: space-between; background: #1e293b; color: #ffffff; padding: 10px 15px; font-family: sans-serif; font-size: 14px; position: sticky; top: 0; z-index: 9999; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="background: #3b82f6; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">নতুন</span>
            <span>আমাদের অফিশিয়াল অ্যাপটি ইনস্টল করুন!</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
            <a href="Earnova.apk" download style="background: #22c55e; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 13px;">ডাউনলোড</a>
            <button onclick="document.getElementById('appDownloadBanner').style.display='none'" style="background: transparent; border: none; color: #94a3b8; font-size: 18px; cursor: pointer;">&times;</button>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('afterbegin', bannerHTML);

    function showDownloadBanner() {
        let banner = document.getElementById('appDownloadBanner');
        if (banner) {
            banner.style.display = 'flex';
        }
    }

    showDownloadBanner();
    setInterval(showDownloadBanner, 20 * 60 * 1000); // ২০ মিনিট পর পর দেখাবে
});
