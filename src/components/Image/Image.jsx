export const Image = ({ link, index, currentIndex }) => {
    return (
        <img
            src={link}
            alt="Football kit"
            style={{
                objectFit: 'cover',
                objectPosition: 'top',
                aspectRatio: '3/4',
                width: '100%',
                height: '100%',
                left: `${(index - currentIndex) * 100}%`,
                transition: 'left 0.7s ease',
            }}
        />
    );
};
