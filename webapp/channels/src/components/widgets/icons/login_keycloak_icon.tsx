// Copyright (c) 2025-present, [Your Organization]. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import { useIntl } from 'react-intl';

export default function KeycloakIcon(props: React.HTMLAttributes<HTMLSpanElement>) {
    const { formatMessage } = useIntl();

    return (
        <span {...props}>
            <svg
                width='256'
                height='256'
                viewBox='0 0 256 256'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-label={formatMessage({ id: 'generic_icons.keycloak', defaultMessage: 'Keycloak Icon' })}
            >
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d="M219.24,76a1.9,1.9,0,0,1-1.66-.95L188.7,25A2,2,0,0,0,187,24H69.18a1.9,1.9,0,0,0-1.66.95l-30,52a0,0,0,0,0,0,0L8.6,127.05a1.94,1.94,0,0,0,0,1.91L37.5,179l30,52a1.9,1.9,0,0,0,1.66.95H187a2,2,0,0,0,1.68-.95L217.6,181a1.9,1.9,0,0,1,1.66-.95h36a2.16,2.16,0,0,0,2.16-2.16V78.17A2.16,2.16,0,0,0,255.22,76h-36Z"
                    fill='#4D4D4D'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d="M255.23,76h-216a2,2,0,0,0-1.66.93s0,0,0,0l-1.07,1.85L23.22,101.75,8.61,127.06a1.9,1.9,0,0,0,0,1.92l3.17,5.5L37.51,179a1.92,1.92,0,0,0,1.67,1H255.26a2.14,2.14,0,0,0,2.12-2.14V78.18A2.16,2.16,0,0,0,255.23,76Z"
                    fill='#E1E1E1'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d="M44.06,122.76L11.78,134.48,8.61,129a1.9,1.9,0,0,1,0-1.92l14.61-25.31Z"
                    fill='#C8C8C8'
                />
                <polygon
                    fillRule='evenodd'
                    clipRule='evenodd'
                    points="236.11 132.11 257.38 129.07 257.38 153.75 236.11 132.11"
                    fill='#C2C2C2'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d="M236.11,132.11l21.27,21.64v24.1a2.14,2.14,0,0,1-2.12,2.14H230.5Z"
                    fill='#C7C7C7'
                />
                <polygon
                    fillRule='evenodd'
                    clipRule='evenodd'
                    points="236.11 132.11 230.5 179.99 200.74 179.99 191.71 158.27 236.11 132.11"
                    fill='#CECECE'
                />
                <polygon
                    fillRule='evenodd'
                    clipRule='evenodd'
                    points="236.11 132.11 257.38 106.21 257.38 129.07 236.11 132.11"
                    fill='#D3D3D3'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d="M257.38,78.17v28l-21.27,25.9L220.06,76h35.16A2.16,2.16,0,0,1,257.38,78.17Z"
                    fill='#C6C6C6'
                />
                <polygon
                    fillRule='evenodd'
                    clipRule='evenodd'
                    points="200.74 179.99 185.03 179.99 180.96 174.16 191.71 158.27 200.74 179.99"
                    fill='#D5D5D5'
                />
                <polygon
                    fillRule='evenodd'
                    clipRule='evenodd'
                    points="236.11 132.11 177.22 107.22 208.19 76.02 220.06 76.02 236.11 132.11"
                    fill='#D0D0D0'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d="M177.22,107.22l14.49,51.05,44.4-26.16Z"
                    fill='#BFBFBF'
                />
                <polygon
                    fillRule='evenodd'
                    clipRule='evenodd'
                    points="185.03 179.99 180.77 179.99 180.96 174.16 185.03 179.99"
                    fill='#D9D9D9'
                />
                <polygon
                    fillRule='evenodd'
                    clipRule='evenodd'
                    points="208.19 76.02 177.22 107.22 171.63 79.31 183.59 76.02 208.19 76.02"
                    fill='#D4D4D4'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d="M177.22,107.22L105.74,123.7,181,174.16Z"
                    fill='#E2E2E2'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d="M177.22,107.22L181,174.16l10.75-15.89Z"
                    fill='#E4E4E4'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d="M171.63,79.31L105.74,123.7l71.48-16.48Z"
                    fill='#DEDEDE'
                />
                <polygon
                    fillRule='evenodd'
                    clipRule='evenodd'
                    points="105.74 123.7 74.76 179.99 57.11 179.99 44.06 122.76 105.74 123.7"
                    fill='#C5C5C5'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d="M74,76L44.06,122.76,36.44,78.83,37.51,77s0,0,0,0A2,2,0,0,1,39.18,76H74Z"
                    fill='#D1D1D1'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d="M57.11,180H39.18a1.92,1.92,0,0,1-1.67-1L11.78,134.48l32.28-11.72Z"
                    fill='#DDD'
                />
            </svg>
        </span>
    );
}
