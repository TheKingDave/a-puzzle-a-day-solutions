<div class="loader"></div>

<style>
    .loader {
        margin-left: 1rem;
        display: inline-block;
        border: 2px solid transparent;
        border-top: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>