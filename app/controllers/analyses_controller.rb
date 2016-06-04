class AnalysesController < ApplicationController

  def show
    # @analysis = Analysis.find_by()
  end

  def index
    # @analyses = Analysis.where(user_id: current_user.id)
  end

  private

  def watson_tone_analysis(content)
    analysis = get_watson_tone_analysis(content) # analysis also has sentence by sentence breakdown. can be used later
    document_emotions = analysis["document_tone"]["tone_categories"][0]
    document_tone = analysis["document_tone"]["tone_categories"][1]
    document_behavior_traits = analysis["document_tone"]["tone_categories"][2]
    number_sentences = analysis["sentences_tone"].length
  end

  def get_watson_tone_analysis(content)
    content_webified = content.gsub(' ', '%20')
    request_url = 'https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?version=2016-05-19&text=' + content_webified
    HTTParty.get(request_url)
  end

end
