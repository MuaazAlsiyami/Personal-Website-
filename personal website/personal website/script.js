// دالة لتعيين ملف تعريف الارتباط
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

// دالة للحصول على قيمة ملف تعريف الارتباط
function getCookie(name) {
    return document.cookie.split('; ').reduce((prev, current) => {
        const [key, value] = current.split('=');
        return key === name ? decodeURIComponent(value) : prev;
    }, null);
}

// دالة لتحديث عدد الزوار
function updateVisitorCount() {
    const visitorCountElement = document.getElementById('visitor-count');
    let count = getCookie('visitorCount');

    // إذا كان الزائر جديدًا
    if (!count) {
        count = Math.floor(Math.random() * 10) + 1; // تعيين عدد زوار عشوائي بين 1 و 10 للزوار الجدد
        setCookie('visitorCount', count, 30); // تعيين الكوكيز لمدة 30 يوم
    } else {
        count = parseInt(count) + 1; // زيادة العدد
        setCookie('visitorCount', count, 30);
    }

    visitorCountElement.textContent = `Number of visitors: ${count}`; // تحديث العرض
    visitorCountElement.style.fontSize = '20px'; // زيادة حجم الخط لجعله أوضح
    visitorCountElement.style.fontWeight = 'bold'; // جعل الخط عريضًا
}

// دالة لتبديل عرض نموذج تسجيل الدخول
function toggleLogin() {
    const modal = document.getElementById('id01');
    // التحقق من حالة العرض وإظهار أو إخفاء النموذج بناءً على ذلك
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

// استدعاء دالة تحديث عدد الزوار عند تحميل الصفحة
window.onload = updateVisitorCount;
