export function Quote({ color }: { color: 'blue' | 'white' }){
    return(
        <svg width="24" height="41" viewBox="0 0 24 41" aria-hidden="true">
        <path
            d="M23.699 8.26063L21.9024 0C8.96686 0.592574 0 5.97464 0 21.8023V40.0206H22.5989V17.1229H14.0401C14.0403 12.0443 17.2267 9.05725 23.699 8.26063Z"
            fill={color === 'blue' ? '#043873' : '#ffffff'}
        />
        </svg>
    )
}