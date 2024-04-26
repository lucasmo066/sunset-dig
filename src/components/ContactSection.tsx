
import {GlobeDemo} from '@/components/Globe';
import {ContactForm} from '@/components/ContactForm';

export default function ContactSection () {
    return (
        <div className="flex flex-col items-center justify-center w-full p-6">
            <div className="w-full text-center items-center justify-center px-8 flex">
            <h2 className="text-5xl md:text-6xl text-center bg-gradient-to-br from-orange-400 to-orange-700 bg-clip-text font-semibold tracking-tight text-transparent mb-4">
                    Contact Us
                </h2>
            </div>
            <div className="flex flex-col items-center justify-center w-4/5">
                <p className="text-black dark:text-white font-extralight text-center px-6">
                    We are always looking for new projects to embark on! If you own a business and want a little more information on how we can help you, feel free to reach out to us. Fill out this form and we will get back to you as soon as possible!
                </p>
                <ContactForm />
            </div>
        
            
        </div>
    );
}