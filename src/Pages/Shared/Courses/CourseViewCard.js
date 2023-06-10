import { Card, Rating } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseViewCard = ({course, adOnStyle}) => {
    const { course_id, course_name, course_img, course_skills, course_price, course_rating } = course;
    const { style } = adOnStyle;
    const [isVisible, setIsVisible] = useState(false);
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [isVisible]);
    return (
        <div>
            <div className="max-w-lg">
                <div className={style}>
                    <Card
                        imgAlt={course_name}
                        imgSrc={course_img} >
                        <Link onClick={ScrollToTop} to={`/course/${course_id}`}>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {course_name}
                            </h5>
                            <p className='mt-2 text-sm dark:text-white'>
                                <span className='font-semibold'>Skills you'll gain: </span>{course_skills.slice(0, 70)}...
                            </p>
                        </Link>
                        <div className="mt-2.5 mb-5 flex items-center">
                            <Rating>
                                <Rating.Star filled={course_rating < 1 ? false : true} />
                                <Rating.Star filled={course_rating < 2 ? false : true} />
                                <Rating.Star filled={course_rating < 3 ? false : true} />
                                <Rating.Star filled={course_rating < 4 ? false : true} />
                                <Rating.Star filled={course_rating < 5 ? false : true} />
                            </Rating>
                            <span className="mr-2 ml-3 rounded bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-800 dark:bg-sky-200 dark:text-sky-800">
                                {course_rating}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                <span className='text-3xl font-extrabold mr-1'>৳</span>{course_price}
                            </span>
                            <Link onClick={ScrollToTop} to={`/course/${course_id}`}
                                className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-800 dark:focus:ring-sky-800">
                                <div className='flex items-center'>
                                    <span>View Details</span>
                                    <svg
                                        className="ml-2 -mr-1 h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CourseViewCard;