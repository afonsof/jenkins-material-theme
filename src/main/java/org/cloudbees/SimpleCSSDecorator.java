package org.cloudbees;

import hudson.Extension;
import hudson.model.PageDecorator;
import net.sf.json.JSONObject;

import org.kohsuke.stapler.StaplerRequest;

@Extension
public class SimpleCSSDecorator extends PageDecorator {
	private String cssUrl;
	private String jsUrl;

	public SimpleCSSDecorator() {
		super(SimpleCSSDecorator.class);
		load();
	}

	@Override
	public boolean configure(StaplerRequest req, JSONObject formData)
			throws FormException {
		cssUrl = formData.getString("cssUrl");
		save();
		return super.configure(req, formData);
	}

	public String getCssUrl() {
		return cssUrl;
	}

}
