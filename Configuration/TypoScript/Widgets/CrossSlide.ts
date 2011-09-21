plugin.tx_yag.widgets {

    crossSlide = USER
    crossSlide {
        userFunc = tx_extbase_core_bootstrap->run
        pluginName = Pi1
        extensionName = Yag
        controller = Album
        action = show
        switchableControllerActions {
            Album {
                1 = show
            }
        }
        settings =< plugin.tx_yag.settings
        persistence =< plugin.tx_yag.persistence
        view =< plugin.tx_yag.view
    }
}
