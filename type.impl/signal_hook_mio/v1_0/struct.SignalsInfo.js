(function() {
    var type_impls = Object.fromEntries([["signal_hook_mio",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SignalsInfo%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/signal_hook_mio/lib.rs.html#164\">Source</a><a href=\"#impl-SignalsInfo%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E: <a class=\"trait\" href=\"signal_hook/iterator/exfiltrator/trait.Exfiltrator.html\" title=\"trait signal_hook::iterator::exfiltrator::Exfiltrator\">Exfiltrator</a>&gt; <a class=\"struct\" href=\"signal_hook_mio/v1_0/struct.SignalsInfo.html\" title=\"struct signal_hook_mio::v1_0::SignalsInfo\">SignalsInfo</a>&lt;E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/signal_hook_mio/lib.rs.html#164\">Source</a><h4 class=\"code-header\">pub fn <a href=\"signal_hook_mio/v1_0/struct.SignalsInfo.html#tymethod.new\" class=\"fn\">new</a>&lt;I, S&gt;(signals: I) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = S&gt;,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"type\" href=\"libc/primitives/type.c_int.html\" title=\"type libc::primitives::c_int\">c_int</a>&gt;,\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class=\"docblock\"><p>Create a <code>Signals</code> instance.</p>\n<p>This registers all the signals listed. The same restrictions (panics, errors) apply\nas with <a href=\"signal_hook/iterator/backend/struct.Handle.html#method.add_signal\" title=\"method signal_hook::iterator::backend::Handle::add_signal\"><code>Handle::add_signal</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_exfiltrator\" class=\"method\"><a class=\"src rightside\" href=\"src/signal_hook_mio/lib.rs.html#164\">Source</a><h4 class=\"code-header\">pub fn <a href=\"signal_hook_mio/v1_0/struct.SignalsInfo.html#tymethod.with_exfiltrator\" class=\"fn\">with_exfiltrator</a>&lt;I, S&gt;(signals: I, exfiltrator: E) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = S&gt;,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"type\" href=\"libc/primitives/type.c_int.html\" title=\"type libc::primitives::c_int\">c_int</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>A constructor with specifying an exfiltrator to pass information out of the signal\nhandlers.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_signal\" class=\"method\"><a class=\"src rightside\" href=\"src/signal_hook_mio/lib.rs.html#164\">Source</a><h4 class=\"code-header\">pub fn <a href=\"signal_hook_mio/v1_0/struct.SignalsInfo.html#tymethod.add_signal\" class=\"fn\">add_signal</a>(&amp;self, signal: <a class=\"type\" href=\"libc/primitives/type.c_int.html\" title=\"type libc::primitives::c_int\">c_int</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Registers another signal to the set watched by this <a href=\"signal_hook_mio/v1_0/type.Signals.html\" title=\"type signal_hook_mio::v1_0::Signals\"><code>Signals</code></a> instance.</p>\n<p>The same restrictions (panics, errors) apply as with\n<a href=\"signal_hook/iterator/backend/struct.Handle.html#method.add_signal\" title=\"method signal_hook::iterator::backend::Handle::add_signal\"><code>Handle::add_signal</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.pending\" class=\"method\"><a class=\"src rightside\" href=\"src/signal_hook_mio/lib.rs.html#164\">Source</a><h4 class=\"code-header\">pub fn <a href=\"signal_hook_mio/v1_0/struct.SignalsInfo.html#tymethod.pending\" class=\"fn\">pending</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"signal_hook_mio/v1_0/struct.Pending.html\" title=\"struct signal_hook_mio::v1_0::Pending\">Pending</a>&lt;E&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Pending&lt;E&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Returns an iterator of already received signals.</p>\n<p>This returns an iterator over all the signal numbers of the signals received since last\ntime they were read (out of the set registered by this <code>Signals</code> instance). Note that they\nare returned in arbitrary order and a signal number is returned only once even if it was\nreceived multiple times.</p>\n<p>This method returns immediately (does not block) and may produce an empty iterator if there\nare no signals ready. So you should register an instance of this struct at an instance of\n<a href=\"mio/poll/struct.Poll.html\" title=\"struct mio::poll::Poll\"><code>mio::Poll</code></a> to query for readability of the underlying self pipe.</p>\n</div></details></div></details>",0,"signal_hook_mio::v1_0::Signals"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[6457]}