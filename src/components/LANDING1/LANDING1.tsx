import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './LANDING1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 58:54 */
export const LANDING1: FC<Props> = memo(function LANDING1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <button className={classes.buttonBtnPrimaryColorBtnRound}>
        <div className={classes.btnText}>Meet the Team</div>
      </button>
      <button className={classes.buttonBtnPrimaryColorBtnOutlin}>
        <div className={classes.btnText2}>Contact Us</div>
      </button>
      <div className={classes.h1Headline3}>Culinary Inclusion, One Spoonful at a Time</div>
      <div className={classes.bigSpoonLilSpoon}>Big Spoon Lil’ Spoon</div>
      <div className={classes.iMG_19531}></div>
      <div className={classes.about}>About</div>
      <div className={classes.link}>Contact</div>
      <div className={classes.link2}>Cookbooks</div>
      <div className={classes.chefInTheKitchen}></div>
      <div className={classes.h1Headline4}>The Cookbook: Issue 1</div>
      <div className={classes.bslsInfo}>
        This cookbook is a tantalizing showcase of Chef Anthony Go&#39;s innovative recipes, blending global influences
        with his unique touch. From quick weeknight dinners to lavish feasts, each page invites you to savor the essence
        of diverse flavors, expertly crafted by the master himself. Unlock the secrets to extraordinary meals and
        transform your kitchen into a haven of delicious creativity.
      </div>
      <div className={classes.iMG_19552}></div>
      <div className={classes.instagram}></div>
      <div className={classes.twitterX}></div>
      <div className={classes.letter}></div>
      <div className={classes.youTube}></div>
      <div className={classes.facebook}></div>
      <div className={classes.bslsInfo2}>
        We aim to provide mentorship to children with exceptionalities. This unique program features cooking classes,
        life-skill workshops and employment programs for children with special needs.
      </div>
      <div className={classes.chef}></div>
    </div>
  );
});
