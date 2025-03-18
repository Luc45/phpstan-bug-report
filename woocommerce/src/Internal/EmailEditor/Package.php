<?php

declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\EmailEditor;

use Automattic\WooCommerce\Utilities\FeaturesUtil;

defined( 'ABSPATH' ) || exit;

/**
 * This class is used to initialize the email editor package.
 *
 * It is a wrapper around the MailPoet\EmailEditor\Package class and
 * ensures that the email editor package is only initialized if the block editor feature flag is enabled.
 */
class Package {
	/**
	 * Version.
	 *
	 * @var string
	 */
	const VERSION = \MailPoet\EmailEditor\Package::VERSION;

	/**
	 * Package active.
	 *
	 * @var bool
	 */
	private static $package_active = false;

	/**
	 * Init the package.
	 *
	 * @internal
	 */
	final public static function init() {
		self::$package_active = FeaturesUtil::feature_is_enabled( 'block_email_editor' );

		// we only want to initialize the package if the block editor feature flag is enabled.
		if ( ! self::$package_active ) {
			return;
		}

		\MailPoet\EmailEditor\Package::init(); // The namespace will be changed to Automattic\WooCommerce\EmailEditor\Package in the future.
		self::initialize();
	}

	/**
	 * Return the version of the package.
	 *
	 * @return string
	 */
	public static function get_version() {
		return \MailPoet\EmailEditor\Package::get_version();
	}

	/**
	 * Return the path to the package.
	 *
	 * @return string
	 */
	public static function get_path() {
		return \MailPoet\EmailEditor\Package::get_path();
	}

	/**
	 * Initialize the email editor integration by fetching the class from the container.
	 *
	 * @return void
	 */
	public static function initialize() {
		$container = wc_get_container();
		$container->get( Integration::class );
	}
}
