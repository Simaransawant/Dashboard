
document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('d-none');
}
