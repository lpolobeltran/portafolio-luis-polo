import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import styles from './skills.module.css';
import { Transition } from '~/components/transition';


const SkillsText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      Habilidades
    </Heading>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Aquí puedes ver las habilidades que poseeo actualmente. En un mundo cambiante, busco cada día {' '}
      <Link href="javascript:void(0);">actualizar mis conocimientos</Link> {' '}
       y <Link href="javascript:void(0);">experimentar nuevas tecnologías</Link> para aportar de manera efectiva a cada proyecto en el que trabajo.
    </Text>
  </Fragment>
);

export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.skill}
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

              <SkillsText visible={visible} titleId={titleId} />
              
              {/* <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Iniciar una conversación
              </Button> */}
            </div>

            {/* <div className={styles.column}>
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
            </div> */}
          </div>
        )}
      </Transition>
    </Section>
  );
};
