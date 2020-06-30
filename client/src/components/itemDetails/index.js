import React from 'react';
import { media } from '../../utils';
import Image from '../image';
import Button from '../button';
import styles from './itemDetails.module.scss';

const ItemDetails = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleImage}>
        <div className={styles.image}>
          <Image src={media(`items/${data.id}.png`)} alt={"product"} />
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.detailsWrap}>
          <div className={styles.social}>
            <div className={styles.tag}>
              <div className={styles.icon}>
                <Image src={media('heart.svg')} alt={"heart"} />
              </div>
              <div className={styles.tagName}>Wishlist</div>
            </div>

            <div className={styles.tag}>
              <div className={styles.icon}>
                <Image src={media('share.svg')} alt={"share"} />
              </div>
              <div className={styles.tagName}>Share</div>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.infoWrapper}>
              <div className={styles.infoTitle}>Price</div>
              <div className={styles.infoPrice}>{data.attributes.price}</div>
            </div>

            <div className={styles.infoWrapper}>
              <div className={styles.infoTitle}>Item Condition</div>
              <div className={styles.infoText}>{data.attributes.condition}</div>
            </div>

            <div className={styles.infoWrapper}>
              <div className={styles.infoTitle}>Item Location</div>
              <div className={styles.infoText}>{data.attributes.location}</div>
            </div>
          </div>

          <div className={styles.sellerWrapper}>
            <div className={styles.sellerTitle}>Seller Info</div>
            <div className={styles.sellerInfo}>
              <div className={styles.sellerIcon}>
                <Image src={media("avatar.svg")} alt={"avatar"} />
              </div>

              <div className={styles.sellerDetails}>
                <div className={styles.infoText}>{data.attributes.seller_name}</div>
                <div className={styles.infoTitle}>{data.attributes.seller_type}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.content}>
            Interested with the ad? Contact the Seller.
          </div>

          <div className={styles.contactInfo}>
            <Button icon={"phone"} title={data.attributes.phone} />
            <Button icon={"email"} title={"Email"} />
            <Button bgColor titleColor icon={"chat"} title={"Chat"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
