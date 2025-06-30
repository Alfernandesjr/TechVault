Hub.Handler.Version = 8; // Released at https://hub.splitscreen.me/ on Fri Mar 14 2025 08:20:21 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "8ToryPKXFmff7D8h7";
Hub.Maintainer.Name = "Talos91";
Hub.Maintainer.Id = "eeL7HAz8zJovChWw4";

var answers1 = ["Yes", "No"];
var answers2 = ["No", "Yes"];
Game.AddOption(
  "Custom resolutions fix?",
  "Matches resolution to window size to fix stretching in split-screen, lower your monitor scale % or set it to 100% if it is not working for you.",
  "Fix",
  answers1
);
Game.AddOption(
  "Disable Proto Input hooks?",
  "Fully disables keyboards/mice support. ONLY select yes if you want to improve performance by very little and are using only gamepads.",
  "Hooks",
  answers2
);

Game.ExecutableContext = ["binkw64.dll"];
Game.KillMutex = ["DarkSoulsIIIMutex"];
Game.DirExclusions = ["settings", "steam_settings"];
Game.DirSymlinkExclusions = ["Game", "SeamlessCoop\\crashdumps\\attachments", "SeamlessCoop\\crashdumps\\reports", "SeamlessCoop\\crashpad", "SeamlessCoop\\locale", "dllMods"];
Game.FileSymlinkExclusions = [
  "steam_appid.txt",
  "steam_interfaces.txt",
  "steamclient64.dll",
  "steamclient.dll",
  "steamclient_loader_x64.exe",
  "dxgi.dll",
  "StubDRM64.dll",
  "winmm.dll",
  "dlllist.txt",
  "metadata",
  "settings.dat",
  "xinput1_3.dll"
];
Game.FileSymlinkCopyInstead = [
  "steam_api64.dll",
  "binkw64.dll",
  "fmod_event64.dll",
  "fmodex64.dll",
  "ds3sc_launcher.exe",
  "ds3sc.dll",
  "ds3sc_settings.ini",
  "english.json",
  "crashpad_handler.exe",
  "PaintedWorlds.dll",
  "dinput8.dll",
  "discord_game_sdk.dll",
  "lazyLoad.ini",
  "SoulsUnsqueezed.ini",
  "dxgi.ini"
];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "DarkSoulsIII.exe";
Game.SteamID = "374320";
Game.GUID = "DARK SOULS III";
Game.GameName = "DARK SOULS III";
Game.LauncherExe = "steamclient_loader_x64.exe";
Game.LauncherExeIgnoreFileCheck = true;
Game.MaxPlayers = 6;
Game.MaxPlayersOneMonitor = 6;
Game.IgnoreWindowBorderCheck = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "DARK SOULS III";
Game.HookFocus = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = ["xinput1_3.dll"];
Game.Hook.CustomDllEnabled = false;
Game.UserProfileSavePath = "AppData\\Roaming\\DarkSoulsIII";
Game.Description =
  "IMPORTANT: Close Steam completely before running this. Requires the latest Seamless Co-op mod to be installed correctly in your main latest clean game files: https://www.nexusmods.com/darksouls3/mods/1895. To connect the instances rest at a bonfire to get the co-op items then use the crystalline pendant to host in one instance and use the stone pendant in the other instances to join. If you use keyboards/mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own cursor, you need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing.";
Game.KeepSymLinkOnExit = false;
Game.PromptBetweenInstances = false;
Game.PauseBetweenContextAndLaunch = 5;
Game.PauseBetweenProcessGrab = 10;
Game.PauseBetweenStarts = 30;

//USS deprecated options:

Game.HookSetCursorPos = false;
Game.HookGetCursorPos = false;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = false;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = false;
Game.SendNormalKeyboardInput = false;
Game.SendScrollWheel = false;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = false;
Game.HookReRegisterRawInputMouse = false;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = false;

//ProtoInput:

Game.SupportsMultipleKeyboardsAndMice = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = false;
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;
Game.ProtoInput.DontShowCursorWhenImageUpdated = true;

Game.ProtoInput.RawInputFilter = false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = false;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = false;
Game.ProtoInput.MouseButtonFilter = false;
Game.ProtoInput.KeyboardButtonFilter = false;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = false;
Game.ProtoInput.UseOpenXinput = false;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;

Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 40000;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008]; //Blocks WM_KILLFOCUS.

Game.Play = function() {
  Context.CopyFolder(Context.ScriptFolder + "\\steam_settings", Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings");

  Context.PatchFileFindPattern(
    System.IO.Path.Combine(Game.Folder, "steamclient_loader_x64.exe"),
    System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "steamclient_loader_x64.exe"),
    "45 33 C9 4C 8D 05 3C 0C 02 00 33 C9 FF 15 74 E8",
    "68 00 80 00 00 90 90 90 90 90 90 90 FF 15 CC E5",
    true
  );

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steamclient.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "steamclient.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steamclient64.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "steamclient64.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ColdClientLoader.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "ColdClientLoader.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\StubDRM64.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "StubDRM64.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\winmm.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "winmm.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dlllist.txt");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dlllist.txt");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\steam_interfaces.txt";
  var lines = [
    "SteamClient012",
    "SteamGameServer011",
    "SteamGameServerStats001",
    "SteamUser016",
    "SteamFriends013",
    "SteamUtils005",
    "SteamMatchMaking009",
    "SteamMatchMakingServers002",
    "STEAMUSERSTATS_INTERFACE_VERSION011",
    "STEAMAPPS_INTERFACE_VERSION005",
    "SteamNetworking005",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION010",
    "STEAMSCREENSHOTS_INTERFACE_VERSION002",
    "STEAMHTTP_INTERFACE_VERSION002",
    "STEAMUNIFIEDMESSAGES_INTERFACE_VERSION001"
  ];
  Context.WriteTextFile(interfaces, lines);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
    new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
    new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang)
  ]);

  var xml = Context.NucleusUserRoot + "\\AppData\\Roaming\\DarkSoulsIII\\GraphicsConfig.xml";

  if (System.IO.File.Exists(xml)) {
    System.IO.File.SetAttributes(xml, System.IO.File.GetAttributes(xml) & ~System.IO.FileAttributes.ReadOnly);
  }

  /*Game.OnFinishedSetup = function(){

    Context.KillProcessesMatchingWindowName("Cold Client Loader (waiting)");
    }*/

  var fix = Context.Options["Fix"];
  var hooks = Context.Options["Hooks"];

  if (fix == "Yes") {
    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "DarkSoulsIII.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "DarkSoulsIII.exe"),
      "03 00 00 80 07",
      Context.Width,
      4,
      true
    );

    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "DarkSoulsIII.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "DarkSoulsIII.exe"),
      "38 04 00 00 00 08",
      Context.Height,
      1,
      true
    );

    var path = Context.NucleusUserRoot + "\\AppData\\Roaming\\DarkSoulsIII\\GraphicsConfig.xml";
    Context.ChangeXmlNodeInnerTextValue(path, "//ScreenMode", "WINDOW");
    //Context.ChangeXmlNodeInnerTextValue(path, "//Resolution-WindowScreenWidth", "1920");
    //Context.ChangeXmlNodeInnerTextValue(path, "//Resolution-WindowScreenHeight", "1080");
    Context.ChangeXmlNodeInnerTextValue(path, "//Resolution-WindowScreenWidth", Context.Width);
    Context.ChangeXmlNodeInnerTextValue(path, "//Resolution-WindowScreenHeight", Context.Height);
  }

  if (fix == "No") {
    if (Player.Owner.IsFullscreen()) {
      var path = Context.NucleusUserRoot + "\\AppData\\Roaming\\DarkSoulsIII\\GraphicsConfig.xml";
      Context.ChangeXmlNodeInnerTextValue(path, "//ScreenMode", "WINDOW");
      Context.ChangeXmlNodeInnerTextValue(path, "//Resolution-WindowScreenWidth", Context.Width);
      Context.ChangeXmlNodeInnerTextValue(path, "//Resolution-WindowScreenHeight", Context.Height);
    } else {
      var path = Context.NucleusUserRoot + "\\AppData\\Roaming\\DarkSoulsIII\\GraphicsConfig.xml";
      Context.ChangeXmlNodeInnerTextValue(path, "//ScreenMode", "WINDOW");
    }
  }

  if (hooks == "Yes") {
    Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
  }

  Game.ProtoInput.OnInputLocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      //ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      //ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      //ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

      //ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

      ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, false);
    }
  };

  Game.ProtoInput.OnInputUnlocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      //ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      //ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      //ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);

      ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, true);
    }
  };
};
