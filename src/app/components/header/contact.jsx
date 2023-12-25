import React, { useEffect, useState } from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { Axios } from '@/app/libs/axios';

export default function Contact() {
  const [infoAdmin, setInfoAdmin] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('/info');
        setInfoAdmin(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {(infoAdmin?.facebook || infoAdmin?.instagram) && (
        <ul className="flex flex-row-reverse gap-4">
          {infoAdmin?.facebook && (
            <li>
              <a href={infoAdmin?.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookF
                  size={19}
                  className="w-8 dark:fill-darkContent fill-lightContent"
                />
              </a>
            </li>
          )}
          {infoAdmin?.instagram && (
            <li>
              <a href={infoAdmin?.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram
                  size={20}
                  className="w-8 dark:fill-darkContent fill-lightContent"
                />
              </a>
            </li>
          )}
        </ul>
      )}
    </>
  );
}
