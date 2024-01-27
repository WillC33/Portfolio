import styles from "./SocialLogos.module.css";


export const LinkedinLogo = ({colour, size}) => {
    return (
        <a href="https://www.linkedin.com/in/williamcooke33/">
            <svg className={styles.fadingButton} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={size} height={size}
                 viewBox="0,0,256,256">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                   stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                   font-family="none" font-weight="none" font-size="none" text-anchor="none"
                   style="mix-blend-mode: normal">
                    <g transform="scale(5.33333,5.33333)">
                        <path
                            d="M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z"
                            fill={colour}></path>
                        <path
                            d="M12,19h5v17h-5zM14.485,17h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM36,36h-5v-9.099c0,-2.198 -1.225,-3.698 -3.192,-3.698c-1.501,0 -2.313,1.012 -2.707,1.99c-0.144,0.35 -0.101,1.318 -0.101,1.807v9h-5v-17h5v2.616c0.721,-1.116 1.85,-2.616 4.738,-2.616c3.578,0 6.261,2.25 6.261,7.274l0.001,9.726z"
                            fill="#ffffff"></path>
                    </g>
                </g>
            </svg>
        </a>
    )
}
