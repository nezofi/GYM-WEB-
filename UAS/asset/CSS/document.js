AOS.init();
const socialIcons = document.querySelectorAll('.fa-social a');

socialIcons.forEach(icon => {

    const platform = icon.querySelector('i').className.split(' ')[1].replace('fa-', '').replace('fa-envelope-o', 'Email');
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.textContent = `Follow us on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
    icon.appendChild(tooltip);
    icon.addEventListener('mouseover', () => {
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(0)';
    });

    icon.addEventListener('mouseout', () => {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(-10px)';
    });
});
