def test_linux_window_provider():
    from awareness.window_watcher import linux_active_window, linux_idle_seconds
    answers = {"getactivewindow": "123", "getwindowname": "VANTA - Firefox", "getwindowpid": "0"}
    assert linux_active_window(lambda argv: answers.get(argv[1], "")) == ("?", "VANTA - Firefox")
    assert linux_active_window(lambda argv: "") is None            # no xdotool or Wayland: quietly unsupported
    assert linux_idle_seconds(lambda argv: "4500") == 4.5 and linux_idle_seconds(lambda argv: "") == 0.0
