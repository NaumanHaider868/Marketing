import React from "react";

const Map = () => {
    return (
        <div className="w-full h-96">
            <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093723!2d144.9537353156391!3d-37.81627974201301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2zTWVsYm91cm5lIFZJQywgQXVzdHJhbGlh!5e0!3m2!1sen!2s!4v1672921541147!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    );
};

export default Map;
