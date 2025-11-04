<footer>
    <div class="footer-content">
        <p>
            Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
        </p>

        <ul class="footer-links">
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/policy">Privacy Policy</a></li>
        </ul>
    </div>
</footer>

<style>
    footer {
        background: var(--footerBg);
        border-top: 1px solid var(--systemQuaternary);
        padding: 32px var(--bodyGutter);
        margin-top: auto;
    }

    .footer-content {
        max-width: 1440px;
        margin: 0 auto;
        font: var(--footnote);
        color: var(--systemSecondary);
    }

    .footer-links {
        display: flex;
        gap: 16px;
        margin-top: 8px;
        flex-wrap: wrap;
    }

    .footer-links li:not(:last-child)::after {
        content: "|";
        margin-left: 16px;
        color: var(--systemQuaternary);
    }

    .footer-links a {
        color: var(--systemSecondary);
    }

    @media (min-width: 768px) {
        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer-links {
            margin-top: 0;
        }
    }
</style>
