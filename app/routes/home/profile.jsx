import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      ¡Me fascina la creatividad!
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Hola, un gusto cononocerte. mi nombre es Luis Polo y soy <Link href="javascript:void(0);">desarrollador full stack</Link>, <Link href="javascript:void(0);">apasionado</Link> por crear experiencias digitales que ayuden a las personas a disfrutar de la vida. 
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Mis proyectos incluyen <Link href="javascript:void(0);">diseño UX/UI</Link>,
      animaciones, minimalismo, aspectos <Link href="javascript:void(0);">frontend</Link>, <Link href="javascript:void(0);">backend</Link> y creatividad desbordante.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Siempre estoy <Link href="javascript:void(0);">dispuesto</Link> y emocionado por participar en <Link href="javascript:void(0);">nuevos proyectos</Link>, así que no dudes en contactarme.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Iniciar una conversación
              </Button>
            </div>

            <div className={styles.column}>

              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImg} 960w`}
                  width={900}
                  height={1200}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
