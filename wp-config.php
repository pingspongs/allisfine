<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'allisfine' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'hoXw!AO&I3BY.:_C3uT6n:>4h;d7;OH@Rk<v.+n@4{pJ|j:4M:u@0W9@(jde6)ZY' );
define( 'SECURE_AUTH_KEY',  ':w@l3LO-N2#N$~sC@]HVaP_(gQMU:j]eaY.<}PBlPKa<JbBeb-4@w;b{hg)kcew/' );
define( 'LOGGED_IN_KEY',    'Z`oZMG38[0X<fFo:M6K(*`f&$QTQ<7R:E6NX*0i2_H&#b9em!;g3WNT&qy.csfcm' );
define( 'NONCE_KEY',        'Wt)$f.$lUkav~tEoh`pccctv9Xsj1Q4s!<=YF?J7IDRd(X?=5W(Hz(;l|*S{Y[q3' );
define( 'AUTH_SALT',        'q@6zMFT6>=0M6eXruk}I;MV.#L|DWXP@AOTxI :Gr*YO#AH<>g-/M}9kE;u@S@@+' );
define( 'SECURE_AUTH_SALT', 'gxj/~ro#3w!fBW)8SE&T;2L$b&`]VQrdFRqtq<?8WEmY[xY2|:6>htaJ.I}sZ,A]' );
define( 'LOGGED_IN_SALT',   '}C&I$tjHj~qF`I_wqU3gRdS3~Sp6^e(o@3#`f=A<o]-]JDBi?7vpPy=An2(?[ dT' );
define( 'NONCE_SALT',       'FPx!mzoUW8i%w$zt?S+1D<z`@A`Cdg$i}]2~Q7j5`(+*dIKOgL?h!^ (`(ZJA~<k' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
